const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');


const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const authRoutes = require('./routes/auth')
const cartRoutes = require('./routes/cart')



mongoose.connect('mongodb://127.0.0.1:27017/shopping-sam-app')
.then(()=>{
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("DB error"); 
    console.log(err)
})


// session 
let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true , 
    cookie: { 
        httpOnly: true ,
        expires: Date.now() + 24*7*60*60*1000 , 
        maxAge:24*7*60*60*1000
    }
}

app.engine('ejs' , ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views')); // views folder 
app.use(express.static(path.join(__dirname , 'public'))); // public folder
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session(configSession)); 
app.use(flash());
// passport vaali
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// PASSPORT WAALI
passport.use(new LocalStrategy(User.authenticate()));

// seeding database
// seedDB()

app.use(productRoutes); //so that harr incoming request ke liye path check kiya jaae
app.use(reviewRoutes);  //so that harr incoming request ke liye path check kiya jaae
app.use(authRoutes);  //so that harr incoming request ke liye path check kiya jaae
app.use(cartRoutes);  //so that harr incoming request ke liye path check kiya jaae



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})



















