const express = require('express');
const app = express();

//Middleware => It is a function which runs or acts as a barrier b/w request and response 

app.use(express.json())

const validation=(req,res,next)=>{
    // console.log("validation middleware is running");
    const{email , password}=req.body
    if(!email.includes("@") || !email.endswith(".com")){
        res.send("Input email is not valid")
    }
    else{
        next()
    }
    
}

app.use(validation); // => connecting validation middleware for upcoming routes

// write home route logic



const authMiddleware=(req,res,next)=>{
    console.log("Auth middleware is running")
    const{email,password}=req.body
    const username="aman@gmail.com"
    const userpassword="1234"
    if(email==ussername && password == userpassword){
        next()
    }
    else{
        res.status(400).send("User is not authenticated to see this page")
    }
}

app.get('/',(req,res)=>{
    console.log("Home page route")
    res.send("Welcome to Home Page");
})

app.get('/profile',(req,res)=>{
    console.log("profile page route")
    res.send("Welcome to my profile");
})

app.listen(8000,()=>{
    console.log("server is running on port http://localhost:8000");
})