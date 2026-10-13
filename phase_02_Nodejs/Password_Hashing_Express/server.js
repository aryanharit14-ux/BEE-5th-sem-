const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("Home page route");
    res.send("Welcome to Home Page");
});

let user = {}; // temporary database

app.post('/register', async (req, res) => {

    const { email, password } = req.body;

    user = {
        useremail: email,
        userpassword: await bcrypt.hash(password, 10)
    };

    // bcrypt.hash(original_password, salt_rounds)
    // salt_rounds:
    // 1  => lower complexity/faster
    // 10 => stronger and commonly used

    res.send(`${JSON.stringify(user)} are registered successfully`);
});


app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (email !== user.useremail) {
        res.send("Email does not exist")
    }

    const checkPassword =await bcrypt.compare(password, user.userpassword);

    // returns true or false 
    if(checkPassword){

        res.send("User Logged in successfully");
    }
    else{
        res.send("Invalid Password");
    }

})
app.listen(8000, () => {
    console.log("server is running on port http://localhost:8000");
});