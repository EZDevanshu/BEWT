const mongoose  = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json())


const DB_URL = "mongodb://localhost:27017/Product_db"

mongoose.connect(DB_URL)
    .then(()=>{console.log("Product databse Connected !")})
    .catch((err)=>{console.error(err)});

// create 

const productSchma = mongoose.Schema({
    productName : String,
    ProductPrice : Number,
    MFD : { type : Date ,default: Date.now}
});
const Product = mongoose.model("Procuct" , productSchma);


app.post("/api/product" , async(req , res)=>{
    try{
        const productCreate = new Product(req.body);
        const ProductSave = await productCreate.save()
        res.status(201).json(ProductSave);
    }
    catch{
        res.status(500).json({massage:"server eroor"})
    }
})


// read all 

app.get('/api/product' , async(req , res)=>{
    try{
        const getAllProduct = await Product.find(req.params)
        res.status(201).json(getAllProduct)
    }
    catch{
        res.status(500).json({massage:"server error"})
    }
})


app.put('/api/product/:id' , async(req , res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id , req.body , {new : true})
        res.status(200).json(updateProduct)
    }
    catch {
        res.status(500).json({massage : "server error"})
    }
})  
// read one 

app.get('/api/product/:id' , async(req , res)=>{
    try{
        const getOneProduct = await Product.findById(req.params.id);
        res.status(201).json(getOneProduct)  
    }
    catch{
        res.status(500).json({massage :"server error"})
    }
})

// update 




// delete

app.delete('/api/product/:id' , async(req , res)=>{
    try{
        
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) return res.status(404).send("product not found")
        res.status(201).json({massage : "deleted Successfully"})
    }
    catch{
        res.status(500).json({massage : "server error"})
    }
})

app.listen(3000 , ()=>{
    console.log("server has started at 3000")
})