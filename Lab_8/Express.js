
// 1. Create a hello world webapp using ExpressJS. (A)


const Express = require('express')

const app = new Express();

// app.get('/' , (req , res)=>{
//     res.send("hello world !!");
// }).listen(3000 , ()=>{
//     console.log("server has started @ 3000");

// })

// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)

// app.get('/about' , (req , res)=>{
//     res.send("This is About Page");
// })

// app.get('/contact' , (req , res)=>{
//     res.send("This is contact Page");
// })


// app.get('/home' , (req , res)=>{
//     res.send("This is home Page");
// })

// app.get('/aboutme' , (req , res)=>{
//     res.send("This is aboutme Page");
// })

// app.listen(3000 , ()=>{
//     console.log(`server has started @ 3000`)
// })

// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using
// express (C )

const fs = require('fs');

app.get('/home', (req , res) => {
    fs.readFile('../Lab_7/name.txt', 'utf8',  (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(`<i>${data}</i>`)
        }
    })
})
app.listen(3000 , ()=>{
    console.log(`server has started @ 3000`)
})
