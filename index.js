const express=require("express");
const app=express();

app.get("/users",(req,res)=>{
    res.send({name:"Pulkit"})
})
app.listen(5000,()=>{
    console.log("Listening at port 5000")
})