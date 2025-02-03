//Pass = 5smyphone

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use("/",(req, res, next) => {
    res.send("Database is working");
}) 

//Database connection

mongoose.connect("mongodb+srv://admin:5smyphone@cluster0.bwq8h.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})

.catch((err)=>console.log(err));