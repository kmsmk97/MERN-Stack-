const User = require("../Model/UserModel"); //Conect Model

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
        await users.save();

    }catch(err){
        console.log(err);
    }

    //Not insert users

    if(!users){
        return res.status(404).json ({messege: "Unable to add users"});
    }
    return res.status(200).json({users});
}

//Get user details by ID
//Function creatiom
const getById = async (req,res,next) =>{
    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }

    //If not displayed

    if(!user){
        return res.status(404).json ({messege: "User not available"});
    }
    return res.status(200).json({user});


}

//Update data
const updateUser = async (req,res,next) => {
    const id = req.params.id;

    const {name,gmail,age,address} = req.body;

    let users;

    try{

        users = await User.findByIdAndUpdate(
            id, {name:name, gmail: gmail, age:age, address:address});
            users = await users.save();

    }catch(err){
        console.log(err);
    }

       //If not displayed

       if(!users){
        return res.status(404).json ({messege: "Unable to update since no user by ID"});
    }
    return res.status(200).json({users});
    

}

exports.getById = getById;
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.updateUser = updateUser;