const http = require("http");
const fs = require("fs");


const myserver = http.createServer((req,res)=>
{
    const log = `${Date.now()}: ${req.url} New Request Received \n`;
    fs.appendFile("login.txt",log,(err,res1)=>
    {
        switch(req.url)
        {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("I am Anil");
                break;
            case "/contact-us":
                res.end('9876543210');
                break;
            default:
                res.end("404 Not Found");
        }

    });
    
});

myserver.listen(8012,()=> console.log("Server Started!"));

