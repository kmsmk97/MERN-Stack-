const User = require("../Model/UserModel"); //Conect Model

const getAllUsers = async (req, res,next) => {
    
    let users;

    //Get all users
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

exports.getAllUsers = getAllUsers;