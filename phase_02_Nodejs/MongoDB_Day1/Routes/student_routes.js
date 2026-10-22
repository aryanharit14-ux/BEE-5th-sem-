const {createStudent} = require('../controllers/studentController')

const express = require('express');
const router = express.Router();

router.post('/students', createStudent);

module.exports = {router};