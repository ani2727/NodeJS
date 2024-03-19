const http = require("http");
const url= require('url');
const fs = require("fs");

const myserver = http.createServer((req,res)=>
{
    const log = `${Date.now()}: ${req.url} New Request Received \n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("login.txt",log,(err,res1)=>
    {
        switch(myUrl.pathname)
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
            case "/search":
                const s = myUrl.query.searchquery;
                res.end("Results: " + s);
                break;
            default:
                res.end("404 Not Found");
        }

    });
    
});

myserver.listen(8015,()=> console.log("Server Started!"));

