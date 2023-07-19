const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./apis/quoteRoutes')
const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})

app.use(cors({origin: ['http://localhost:3000']}));

app.use(express.urlencoded({extended:true})); //form data
app.use(express.json()); //json data


app.use(quoteRoutes);


app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"})
})


// seedDB();

const port = process.env.PORT || 8080;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})