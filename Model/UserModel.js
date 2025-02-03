const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String, //Datatype
        required:true, //Validate
    },

    age:{
        type:Number, //Datatype
        required:true, //Validate
    },

    address:{
        type:String, //Datatype
        required:true, //Validate
    }
});

module.exports = mongoose.model(
    "userModel", //Filename
    userSchema //Function name
)