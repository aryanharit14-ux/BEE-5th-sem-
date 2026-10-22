const Student = require("../models/studentModel");

// CRUD Application
// Create Student

const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);

        res.status(201).json({
            message: "Student created successfully",
            student: newStudent
        });
    } catch (error) {
        res.status(400).json({
            message: "Error creating student",
            error: error.message
        });
    }
};

// read all students
// select * from students
// student.find() => read students
const getStudents = async (req, res) => {
    try {
        const data = await Student.find();
        res.send({
            "message": "Students fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
};

module.exports = { createStudent, getStudents };
