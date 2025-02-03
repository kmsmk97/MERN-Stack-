/*const User = require("../Model/UserModel"); //Conect Model

const getAllUsers = async (req, res,next) => {
    
    let users;

    //Get all users********************************
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    //If users not found

    if(!users){
        return res.status(404).json({messege:"User not found"});
    }

    //Display function
    return res.status(200).json({users});
};

//Insert Data ***************************
const addUsers = async (req, res,next) =>{

    const {name,gmail,age,address} = req.body;

    let users;

    try{

        users = new User ({name,gmail,age,address});
        await User.save();

    }catch(err){
        console.log(err);
    }

    //Not insert users

    if(!users){
        return res.status(404).json ({messege: "Unable to add users"});
    }
    return res.status(200).json({users});
}
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers; */

const User = require("../Model/UserModel"); // Connect Model

// Get All Users
const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }

    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({ users });
};

// Insert Data
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;

    if (!name || !gmail || !age || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }

    let user;
    try {
        user = new User({ name, gmail, age, address });
        await user.save();
    } catch (err) {
        return res.status(500).json({ message: "Error saving user", error: err });
    }

    return res.status(201).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
