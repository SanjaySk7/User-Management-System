const express=require("express");
const {createUser,getUser,deleteUser,updateUser}=require('../controllers/eventController')

const router=express.Router();

router.post("/users",createUser);
router.get("/users",getUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);

module.exports=router;