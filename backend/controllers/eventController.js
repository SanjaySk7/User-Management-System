const DataModel=require('../models/dataModels');

const createUser=async(req,res)=>{
    try{
        const newData=new DataModel(req.body);
        const savedData=await newData.save();
        
        res.status(201).json(savedData);
    }
    catch(err){
        console.log("Error in adding contacts",err.message);
    }
}

const getUser = async (req, res) => {
    try {
      const users = await DataModel.find();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const deleteUser = async (req, res) => {
    console.log("Deleting contact with ID:", req.params.id);
    try {
      const result = await DataModel.findByIdAndDelete(req.params.id);
    
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  }
  catch (err) {
      console.error("Error deleting user:", err.message);
      res.status(500).json({ error: "Internal Server Error" }); 
    }
  };

  const updateUser = async (req, res) => {
    console.log(req.params.id);
    try {
      const updatedUser = await DataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating contact:", error.message);
      res.status(500).json({ error: "Error updating contact" });
    }
  };

  

module.exports={createUser,getUser,deleteUser,updateUser};