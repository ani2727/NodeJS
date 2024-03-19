 const fs = require("fs"); //inbuilt module

// //creating a new file
// fs.writeFileSync("./example.txt","Hello World Second Time");
// fs.writeFile("./example.txt","Hello",(err)=>{}); //Asynchronous: expects a call back

// //reading a file
// const res2 = fs.readFileSync("./example.txt","utf-8");
// console.log(res);

// const re3 = fs.readFile("./example.txt","utf-8",(err,result)=>{
//     if(err)
//     {
//         console.log("Error",err);
//     }
//     else console.log(result);
// })

// //append Operation
// const res = fs.appendFileSync("./example.txt",new Date().getDate().toLocaleString());
// const res1 = fs.appendFileSync("./example.txt",Date.now());
// console.log(res);

// //Delete a file
// fs.unlinkSync('./example.txt');

//creating a folder
fs.mkdirSync("Assets");
fs.unlinkSync("./Assets");