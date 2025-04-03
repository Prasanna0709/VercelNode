const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to devops CD in Vercel!");
});

app.get("/fget",(req,res)=>{
    res.send("First get!");
});

app.post("/mypost",()=>{
    console.log("my app");
})

app.listen(3000,()=>{
    console.log("App is running on Port 3000");
});