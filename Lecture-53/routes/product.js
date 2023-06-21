const express = require('express');
const Product = require('../models/Product');
const router = express.Router() //mini instance

// to show all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find({});
    res.render('products/index' , {products});
})


// to show the form for new product
router.get('/product/new' , (req,res)=>{
    res.render('products/new');
})

// to actually add the product
router.post('/products' , async(req,res)=>{
    let {name , img , price , desc} = req.body;
    await Product.create({name , img , price , desc})
    res.redirect('/products');
})


// to show a particular product
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/show' , {foundProduct})
})


// form to edit the product
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit' , {foundProduct})
})

// to actually edit the data in db
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate( id , {name , img , price , desc}  )
    res.redirect(`/products/${id}`);
})


// to delete a product
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


module.exports = router;

