const express = require('express');
const router = express();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const generateAuthToken = require('../jwtTokenGenerator');

// signup
router.post('/register' , async(req,res)=>{
    let user = req.body;
    // console.log(user);
    const Email = await User.findOne({email : user.email})
    if(Email){
        // return res.send("bhai mail pehle se used hai, nhi ho paega")
        res.send("bhai mail pehle se used hai, nhi ho paega")
    }
    else{
        console.log(user.passWord);
        user.passWord = await bcrypt.hash(user.passWord , 10);
        console.log(user.passWord);

        let dbUser = new User({
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email,
            passWord : user.passWord
        })
        await dbUser.save();
        res.send('hogya signup poora')
    }
})


// login
router.post('/login' , async(req,res)=>{
    let userFormData = req.body;
    // console.log(userFormData,'sam ka form');

    let userDbInfo;
    try{
        userDbInfo = await User.findOne({email : userFormData.email})
    }
    catch(err){
        return res.send("login mi issue")
    }

    if(!userDbInfo){
        return res.send('jaao jakar register krke aao pehle')
    }
    
    let validatePass = await bcrypt.compare(userFormData.passWord , userDbInfo.passWord);

    console.log(validatePass,'hi sam');

    if(!validatePass){
        return res.send('incorrect password');
    }

    const token = generateAuthToken(userDbInfo);
    // console.log(token);

    // res.send('user login kr rha hai')
    res.send({
        data:{
            token:token,
            userDbInfo:userDbInfo
        },
        msg:"sab kuch sahi chal rha hai user loggedin"
    })
})



module.exports = router;