const fs = require('fs')

// 1) Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously
// and print its content on the console. (A)

fs.readFile("data.txt" , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
})

// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the
// asynchronous version. (A)

// const ans  = fs.readFileSync("data.txt" , "utf8")

// console.log(ans);

// console.log("this Print after upper line");

// 3) Create a program that writes the text into a file named output.txt. (A)

// fs.writeFile("output.txt" , "This is the text writen in new file" , (err,data)=>{
//     if(err){
//         console.log("Error : ", err)
//     }
//     else{
//         console.log(data);
//     }
// })


// 4) Create a program that appends the text into a file named output.txt. (A)

// fs.appendFile("output.txt" , "This is appended text!!" , (err , data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data successfully uppended !!");
//     }
// })


// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or
// error. (B)

// fs.unlink("temp.txt" , (err , data)=>{
//     if(err){
//         console.log("Err :" , err)
//     }
//     else{
//         console.log("data :" ,data)
//     }
// })

// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already
// exists, show an appropriate message. (B)

// fs.mkdir('./my-data' , (err , data)=>{
//     if(err){
//         if(err.code == 'EEXIST'){
//             console.log("Aleady Existed..")
//         }
//         else{
//             console.log(err);
//         }   
//     }
//     else{
//         console.log("successfully Created !!" , data);
//     }
// })


// 7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the
// file names one by one. (B)

// fs.readdir("./my-data" , (err)=>{
//     if(err){
//         console.log("Error hai bhai!!!", err)
//     }
//     else{
//         console.log("WE are in the folder!!")
//         fs.forEach(file => {
//             confirm.log(file);
//         });
//     }
// })

// 8) Write a program that copies a file named source.txt to a new file named backup.txt using
// fs.copyFile(). (C)


// fs.copyFile("./my-data/hello.txt" , "./my-data/bakup.txt" , (err)=>{
//     if(err){
//         console.log("Error :" , err)
//     }
//     else{
//         console.log("coped successfully!!")
//     }
// })

// 9) Write a program that checks if the file config.json exists in the current directory using
// fs.existsSync() and prints the result. (B)

// const ans = fs.existsSync("config.json")

// if(ans){
//     console.log("exists")
// }
// else{
//     console.log("not exist");
// }
// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content
// changes, print: “File Changed” (C)
// fs.watch("output.txt", (eventType)=>{
//     if(eventType){
//         console.log(eventType);
//     }
// })