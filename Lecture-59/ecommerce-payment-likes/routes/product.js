const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { validateProduct , isLoggedIn  , isSeller ,isProductAuthor} = require('../middleware');
const {showAllProducts, productForm , createProduct , showProduct , editProductForm , updateProduct , deleteProduct} =  require('../controllers/product')

router.get('/products', showAllProducts );


router.get('/products/new', isLoggedIn, isSeller, productForm);

router.post('/products', isLoggedIn, isSeller, validateProduct, createProduct);

router.get('/products/:id', isLoggedIn, showProduct);


router.get('/products/:id/edit',isLoggedIn,isProductAuthor, editProductForm);

router.patch('/products/:id', isLoggedIn, isProductAuthor, validateProduct, updateProduct);


router.delete('/products/:id',isLoggedIn,isProductAuthor,deleteProduct);


module.exports = router;