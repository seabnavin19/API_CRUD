const express = require("express");
const app= express()
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

var courses=[
    {id:1,name:"navin"}
]

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/api/students",(req,res)=>{
    res.send([1,2,3])
})

app.get('/api/students/:id/:num',(req,res)=>{
    res.send(req.params)
});

app.post("api/students",(req,res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    }
    // courses.push(course)
    res.send(course)
})

const port= process.env.PORT || 3000;
app.listen(port,()=>console.log("listening"))