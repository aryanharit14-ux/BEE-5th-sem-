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

// we will fetch single student using id
// select id from students where id = 101
// student.findById(id) => read single student

const getSingleStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Student.findById(id);
        res.send({
            "message": "Student fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
};

// delete student using id
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        await Student.findByIdAndDelete(id);
        res.send({
            "message": "Student deleted successfully"
        })
    } catch (error) {
        res.send(error)
    }
};

// find by id and update by id
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.send({
            "message": "Student updated successfully",
            updatedStudent
        })
    } catch (error) {
        res.send(error)
    }
};

module.exports = { createStudent, getStudents, getSingleStudent, deleteStudent, updateStudent };

