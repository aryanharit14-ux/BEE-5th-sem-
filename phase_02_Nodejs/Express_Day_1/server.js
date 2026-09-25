const express = require("express"); // importing express
const app = express(); // connecting express with our application

const fs = require("fs"); // importing file system module to read and write data in db.json file

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  const data = fs.readFileSync("db.json", "utf8"); // this will read the JSON file
  const users= JSON.parse(data); // this will parse the data and get the users array
  res.send(users);
});

app.post("/users", (req, res) => {
  const data = fs.readFileSync("db.json", "utf8"); // this will read the JSON file
  const data_with_new_user_key= JSON.parse(data);

  const users_array = data_with_new_user_key.users; // this will get the users array from the JSON file


  console.log(users_array);

  const newUser = {...req.body,id:users_array.length+1};// this will get the new user data from the request body

  const check_user = users_array.some((el) => el.email == newUser.email)
  if(check_user){
    res.send("user already exists");
  }

  else{

    users_array.push(newUser);// this will push the new user data to the users array
    data_with_new_user_key.users = users_array; // this will create a new object with the updated users array
    fs.writeFileSync("db.json", JSON.stringify(data_with_new_user_key)); // this will write the updated users array to the JSON file
    res.send("user saved successfully");

  }
  

})

//CRUD APPLICATION
// We will store users data in db.json file by post request 
app.delete("/users/:id", (req, res) => {
    const userId = +req.params.id;
    const data = fs.readFileSync("db.json", "utf8");
    const data_with_new_user_key = JSON.parse(data);
    const users_array = data_with_new_user_key.users;
    const userIndex = users_array.findIndex((el) => el.id === userId);
    if (userIndex === -1) {
        res.send("user not found");
    } 
    else {
        users_array.splice(userIndex, 1);
        data_with_new_user_key.users = users_array;
        fs.writeFileSync(
            "db.json",
            JSON.stringify(data_with_new_user_key)
        );
        res.send("user deleted successfully");
    }
});


app.listen(8000, () => {
  console.log("Server started in http://localhost:8000");
});

app.get("/users/:id", (req, res) => {

  const userId = +req.params.id; // this will get the user id from the request params
  const data = fs.readFileSync("db.json", "utf8"); // this will read the JSON file
  const data_with_new_user_key= JSON.parse(data);
  const users_array = data_with_new_user_key.users; // this will get the users array from the JSON file
  const find_user = users_array.find((el) => el.id == userId); // this will find the user with the given id
  if(find_user){
    res.send(find_user);
  }
  else{
    res.send("user not found");
  }
})

app.put("/users/:id", (req, res) => {
  const userId = +req.params.id; 
  const data = fs.readFileSync("db.json", "utf8"); 
  const data_with_users_key= JSON.parse(data);
  const users_array = data_with_users_key.users; 
  const find_user = users_array.find((el) => el.id === userId);
  if(find_user){
    find_user.name = req.body.name;
    find_user.email = req.body.email;
    fs.writeFileSync("db.json", JSON.stringify(data_with_users_key));
    res.send("user updated successfully");
  }
  else{
    res.send("user does not exist");
  }
});
