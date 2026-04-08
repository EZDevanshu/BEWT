const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('data base url here')
.then(()=> console.log("connect"))
.catch(err => console.log(err));

const LaptopSchema = new mongoose.Schema({
    LaptopID : Number,
    LaptopName : String,
    LaptopPrice : Number,
    LaptopProcessor : String,
    LaptopRAM : Number,
})

const Laptop = mongoose.model('Laptop' , LaptopSchema);

// insert laptops    
app.post('/laptops' , async (req ,res)=>{
    const data = new Laptop({
        LaptopID : req.body.LaptopID,
        LaptopName : req.body.LaptopName,
        LaptopPrice : req.body.LaptopPrice,
        LaptopProcessor : req.body.LaptopProcessor,
        LaptopRAM : req.body.LaptopRAM,
    });
    await data.save();
    res.send(data);
})

// get all laptops 
app.get('/laptops' , async (req , res)=>{
    const data = await Laptop.find();
    res.send(data);
})

// get by id laptop
app.get('/laptops/:id' , async(req, res)=>{
    const data = await Laptop.findById(req.params.id);
    res.send(data);
})

// update laptop
app.put('/laptops/:id' , async (req, res)=>{
    const data = await Laptop.findByIdAndUpdate(
        req.params.id,
        res.body,
        {new : true},
    );
    res.send(data);
});

// delete laptop
app.delete('/laptops/:id' , async(req, res)=>{
    const data = await Laptop.findByIdAndDelete(req.params.id);
    res.send("laptop deleted");
})

app.listen(3000 , ()=>{
    console.log("server started at 3000 PORT");
})