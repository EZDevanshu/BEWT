const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FacID : Number,
    FacName : String,
    FacSalary : Number,
})

module.exports = mongoose.model("Faculty" , schema);