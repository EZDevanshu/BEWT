const mongoose = require('mongoose')
const express = require('express')

const app = express();

app.use(express.json())

const DB_URL = "mongodb://localhost:27017/Faculty_db"

mongoose.connect(DB_URL)
    .then(()=>{console.log("Student mongo connected !!")})
    .catch((err)=>{console.log(err , "errro")})

const FacultySchema = new mongoose.Schema({
    name : String,
    age : Number
})


const faculty = mongoose.model("faculty" , FacultySchema);

// create 

app.post('/api/faculty' , async (req , res)=>{
    try{
        const createFaculty = new faculty(req.body)
        const savedFaculty = await createFaculty.save()
        res.status(201).json(savedFaculty)
    }
    catch{
        res.status(500).json({Error: "Server error"})
    }
})

// read all 

app.post('api/faculty' , async(req ,res)=>{
    try{
        const faculty = await faculty.find()
        res.json(faculty);
    }
    catch{
        res.status(500).json({error : "server error"});
    }
})

// read one 
app.post('api/faculty' , async(req ,res)=>{
    try{
        const faculty = await faculty.findById(req.params.id)
        if(!faculty) return res.status(404).send("not found")
        res.json(faculty);
    }
    catch{
        res.status(500).json({error : "server error"});
    }
})

// update
app.put('api/faculty' , async (req , res)=>{
    try{
        const updateFaculty = await faculty.findByIdAndUpdate(req.params.id , res.body , { new : true})
        res.json(updateFaculty)
    }
    catch{
        res.status(500).json({error : "server error"})
    }
})

// delete 

app.delete('api/faculty' , async (req , res)=>{
    try{
        const faculty = await faculty.findByIdAndDelete(req.params.id)
        if(!faculty)return res.status(404).send("faculty not found")
        res.json({massage : "student was deleted"})
    }
    catch{  
        res.status(500).json({error :"server error"})
    }   
})