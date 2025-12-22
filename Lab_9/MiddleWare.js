const express = require('express');

const app = express();

const MiddleWareDemo = (req , res , next) => {
    console.log("MiddleWare Called!!!")
    if(req.query.admin === 'devanshu'){
        next();
    }
    else{
        res.send("Access Denied");
    }
}   

app.use(MiddleWareDemo);


app.get('/', (req , res)=>{
    res.send("Welcome to Admin")
})

app.get('/contact' , (req , res)=>{
    res.send("Contact !!")
})

app.listen(3000 , ()=>{
    console.log("server started !!");
})