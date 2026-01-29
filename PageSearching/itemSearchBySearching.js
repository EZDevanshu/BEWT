const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

const DB_URL = 'mongodb://localhost:27017/Faculty_db'

mongoose.connect(DB_URL).then(()=>{console.log("faculty database connected..")}).catch((err)=>{console.log(err)})

const facultySchema = mongoose.Schema({
    name : String ,
    departmentName : String,
    joiningDate : Date,
    salary : Number
})

const Faculty = mongoose.model('Faculty' , facultySchema);

// create 

app.post("/faculties" , async(req , res)=>{
        try{
            const FacultyCreaed = new Faculty(req.body);
            const FacultySaved = await FacultyCreaed.save()
            res.status(201).json(FacultySaved);
        }
        catch{
            res.status(500).json({massage:"server eroor"})
        }
    })
// get all faculties

app.get('/faculies' , async (req , res)=>{
    try{
        const faculties = await Faculty.find();
        res.status(200).json(faculties)
    }
    catch{
        res.sta(404).send()
    }
})