const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = process.env.JWT_SECRET || 'change_this_to_a_long_random_secret';
let user = {}; // Temporary database

app.get('/', (req, res) => {
    console.log('Home page route');
    res.send('Welcome to Home Page');
});

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).send('Email and password are required');

        user = {
            useremail: email,
            userpassword: await bcrypt.hash(password, 10)
        };

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Registration failed');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).send('Email and password are required');

        if (email !== user.useremail)
            return res.status(401).send('Email does not exist');

        const checkPassword = await bcrypt.compare(
            password, user.userpassword
        );

        if (!checkPassword)
            return res.status(401).send('Invalid password credentials');

        const token = jwt.sign(
            { email: user.useremail },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({
            message: 'User logged in successfully',
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Login failed');
    }
});

const authMiddleware = (req, res, next) => {
    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    const decode = jwt.verify(token, SECRET_KEY);
    if(decode){
        next();
    }else{
        return res.send("Invalid Token");
    }
};

app.get('/profile', authMiddleware, (req, res) => {
    res.send(`Welcome to your profile page, ${req.user.email}`);
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});