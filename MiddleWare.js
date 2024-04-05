// The main purpose of the middleware is to modify the req and res objects, and then compile and execute any code that is required.
// It also helps to terminate the request-response session and call for the next middleware in the stack.

//Sample code how  middlewares works:

const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8005;

app.use(express.urlencoded({extended : false})); //1st middleware

app.use((req,res,next)=>{  //2nd middleware
    console.log("Hello From Middleware1");
    // return res.json({msg:" Hello1"});
    next();
})

app.use((req,res,next)=>{ //third middleware
    console.log("Hello From MiddleWare2");
    // return res.json({msg: "Hello2"});
    next();
})
