const mongoose = require('mongoose');
const express = require("express");

const app = express();
app.use(express.json());

const DB_URL = "mongodb://localhost:27017/student_db";

mongoose.connect(DB_URL)
    .then(() => console.log("Student MongoDB connected"))
    .catch(err => console.error('connection error:', err));

const StudentSchema = new mongoose.Schema({
    name: String,
    department: String,
    enrollDate: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

// CREATE
app.post('/api/student', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ ALL
app.get('/api/student', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch {
        res.status(500).json({ error: "server error" });
    }
});

// READ ONE
app.get('/api/student/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send('Student not found');
        res.json(student);
    } catch {
        res.status(500).json({ error: 'server error' });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
