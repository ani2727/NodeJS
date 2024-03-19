//const http = require("http"); No need because express has it
//const url = require("url"); No need because express has it
const express = require("express");

const app = express();

//syntax: app.method(path,handler)
app.get('/',(req,res)=>
{
    return res.send("Hello From HomePage");
});

app.get('/about',(req,res)=>
{
    return res.send("Hello From About Page. Hey! " + req.query.myname);
});

//const myServer = http.createServer(app); No need because express has it

app.listen(8000,()=>{"Server Started!"});