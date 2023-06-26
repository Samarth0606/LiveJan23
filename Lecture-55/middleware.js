const {productSchema , reviewSchema} = require('./schema')


const validateProduct = (req,res,next)=>{
    const {name,img,price,desc} = req.body;
    const {error} = productSchema.validate({name,img,price,desc})
    if(error){
        return res.render('error');
    }
    next();
}

const validateReview = ()=>{
    const {rating,comment} = req.body;
    const {error} = productSchema.validate({rating,comment})
    if(error){
        return res.render('error');
    }
    next();
}


module.exports = {validateReview , validateProduct}
















