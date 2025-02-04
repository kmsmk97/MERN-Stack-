//Pass = 5smyphone

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");
const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);


//Database connection

mongoose.connect("mongodb+srv://admin:5smyphone@cluster0.bwq8h.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})

.catch((err)=>console.log(err));