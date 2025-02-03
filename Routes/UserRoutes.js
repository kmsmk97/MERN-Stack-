const express = require("express");
const router = express.Router();

//Insert user
const User = require("../Model/UserModel");

//Insert user control
const UserController = require("../Controllers/UserControler");

router.get("/",UserController.getAllUsers);

//export
module.exports = router;
