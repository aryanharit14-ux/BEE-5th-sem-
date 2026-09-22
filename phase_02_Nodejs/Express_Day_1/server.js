const express = require("express"); // importing express
const app = express(); // connecting express with our application

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.listen(8000, () => {
  console.log("Server started in http://localhost:8000");
});