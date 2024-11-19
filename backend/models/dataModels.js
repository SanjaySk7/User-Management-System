const mongoose=require('mongoose');


const DataSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: Date,
        required:true,
    }
})

const DataModel=mongoose.model("DataModel",DataSchema);

module.exports=DataModel;