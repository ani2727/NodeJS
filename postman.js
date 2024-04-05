const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8005;

app.use(express.urlencoded({extended : false}));

//Getting Json Data

// app.get("/users",(req,res)=>{
//     return res.json(users);
// })

// app.get("/users/:id",(req,res)=>
// {
//     const id = Number(req.params.id);
//     const user = users.find((user)=>(user.id == id));
//     return res.json(user);
// })

//Using routes
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>(user.id == id));
    return res.json(user);
})

app.route("/api/users/")
.get((req,res)=>{
    
    return res.json(users);
})

.patch((req,res)=>{
    //Edit user
    return res.json({Status : "Pending"});
})



app.post("/api/users",(req,res)=>{
    const body = req.body;
    console.log(body);

    users.push({...body,id: users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status: "Success",id: users.length});
    })
});

app.delete("/api/users/:id",(req,res)=>
{

    return res.json({Status : "Deleted"});
})


app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));
