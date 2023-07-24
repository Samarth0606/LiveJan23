const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./router/user')


mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/JWT-DEMO')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})


app.use(express.json());


app.get('/' , (req,res)=>{
    res.send('root route hai');
})


app.use(userRoutes);


app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})
