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
  const users= JSON.parse(data);

  const users_array = users.users; // this will get the users array from the JSON file


  console.log(users_array);

  const newUser = req.body; // this will get the new user data from the request body
  users_array.push(newUser); // this will push the new user data to the users array

  fs.writeFileSync("db.json", JSON.stringify(users)); // this will write the updated users array to the JSON file

  res.send("user saved successfully");

})

//CRUD APPLICATION
// We will store users data in db.json file by post request 

app.listen(8000, () => {
  console.log("Server started in http://localhost:8000");
});