// 1. Create a hello world webapp using “http” core module in NodeJS. (A)

// const http = require('http')

// http.createServer((req , res)=>{

//     console.log(req.url)

//     res.write("hello world");
//     console.log("refreshed!!!");
    
//     res.end()
    
// }).listen(3000 , ()=>{
//     console.log("server has started..!");
// })


// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.

// const http = require('http')

// http.createServer((req , res)=>{

//     console.log(req.url)

//     if(req.url == '/about'){
//         res.write("about page")
//     }
//     if(req.url == '/contect'){
//         res.write("contact page");        
//     }

//     // res.write("hello world");
//     console.log("refreshed!!!");
    
//     res.end()
    
// }).listen(3000 , ()=>{
//     console.log("server has started..!");
// })


//3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using
// http core module (C)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res)=>{
    if(req.url == '/name'){
        fs.readFile('name.txt' ,(err , data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
            }
        })
    }
   
    else if(req.url == '/code'){
        fs.readFile('code.txt' ,'utf8' , (err , data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
                return
            }
        })
    }
    else if(req.url == '/krishna'){
        fs.readFile('krishna.txt'  ,'utf8', (err , data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
                return
            }
        })
    }
    
})
server.listen(3000 ,()=>{
    console.log("server has started!!");
})
