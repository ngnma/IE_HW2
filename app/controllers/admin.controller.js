const User = require('../models/user.model')

// Get All Admins
exports.getAll = async(req,res)=>{
    try{
        const admins = await User.find({});
        res.status(200).json(admins);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Create new Admin
exports.create = async(req,res)=>{
    try{
        const admin = await User.create(req.body);
        res.status(200).json(student);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};