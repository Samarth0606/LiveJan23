
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


// app.use(cookieParser());
app.use(cookieParser('youneedabettersecret'));


app.get('/' , (req,res)=>{
    console.log(req.cookies);
    // res.send(req.cookies); //all easy cookies
    res.send(req.signedCookies); //all signed cookies

})
// signed cookie
app.get('/getsignedcookies' , (req,res)=>{
    res.cookie('bindaas' , 'sachin' , {signed:true} )
    res.send('cokkies sent successfully');
})


// app.get('/setcookie' , (req,res)=>{
//     res.cookie('mode' , 'dark');
//     res.cookie('location' , 'delhi');
//     res.cookie('username' , 'samarth');
//     res.send('server sent you cookies');
// })


// app.get('/getcookies' , (req,res)=>{
//     let {mode , location , username} = req.cookies;
//     res.send(`name is ${username},stay in ${location} and theme is ${mode}`);
// })




app.listen(8080 , ()=>{
    console.log("server connected at 8080")
})






