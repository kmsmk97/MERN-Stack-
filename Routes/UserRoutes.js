const express = require("express");
const router = express.Router();

//Insert user
const User = require("../Model/UserModel");

//Insert user control
const UserController = require("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);


//export
module.exports = router;

