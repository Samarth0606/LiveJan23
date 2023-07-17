const { productSchema } = require("./schema");
const { reviewSchema } = require("./schema");
const passport = require('passport');
const Product = require("./models/Product");


const isLoggedIn = (req,res,next)=>{
    // console.log(req.originalUrl);
    // console.log(req.xhr);
    if(req.xhr && !req.isAuthenticated()){
        return res.status(401).json({msg:'you need to login first'});
    }
    
    if(!req.isAuthenticated()){
        req.flash('error' , 'you need to login first');
        return res.redirect('/login');
    }
    next();
} 


const validateProduct = (req,res,next)=>{
    const {name, img, price , desc} = req.body;
    const {error} = productSchema.validate({name,img,price,desc});
    
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error' , {err:msg});
    }
    next();
}

const validateReview = (req,res,next)=>{

    const {rating, comment} = req.body;
    const {error} = reviewSchema.validate({rating,comment});

    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error' , {err:msg});
    }
    next();
}

const isSeller = (req,res,next)=>{
    if(!req.user.role){
        req.flash('error' , 'you donot have the permission to do that');
        return res.redirect('/products');
    }
    else if(req.user.role !== 'seller'){
        req.flash('error' , 'you donot have the permission to do that');
        return res.redirect('/products');
    }
    next();
}

const isProductAuthor = async(req,res,next)=>{
//to get the id of thatparticular product
    let {id} = req.params;
    const product = await Product.findById(id);
    console.log(product.author);
    console.log(req.user);
    if(!product.author.equals(req.user._id)){
        req.flash('error' , 'you donot have the permission to do that');
        return res.redirect(`/products/${id}`);
    }
    next();
}


module.exports = {validateProduct ,validateReview , isLoggedIn , isSeller , isProductAuthor} ;