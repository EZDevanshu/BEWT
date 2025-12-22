const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get("/" , (req , res)=>{
    res.send("this is my Code File, /code.txt ")
})

app.listen(3000 , ()=>{
    console.log("Server Has Started!!");
})