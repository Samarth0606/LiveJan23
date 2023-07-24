const mongoose  = require("mongoose");


let userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    }
})


const User = mongoose.model('User' , userSchema);
module.exports = User;



