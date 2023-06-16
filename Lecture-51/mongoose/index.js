
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("error while connecting DB")
    console.log(err)
})


// schema (blue-print)
const movieSchema = new mongoose.Schema({
    name : String , 
    rating : Number , 
    year : Number,
    isWatched : Boolean
})

// model (JS class) --> collection for db
const Movie =  mongoose.model('Movie' , movieSchema); //js class
// console.log(Movie);


// making a new object 
let ironman = new Movie({ //creates a new object using (model == js class)
    name:"Ironman",
    rating:8,
    year:2015,
    isWatched:true
})

ironman.save(); //db ke andar us object ko stoe krdega permamnently

console.log(ironman);



