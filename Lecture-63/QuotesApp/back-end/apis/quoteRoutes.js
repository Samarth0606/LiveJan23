
const Quotes = require('../models/Quote')
const router = require('express').Router();

router.get('/allquotes' , async (req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'})
    }
})


router.post('/addquotes' , async(req,res)=>{
    let {text , author} = req.body;
    await Quotes.create({text , author});
    res.status(201).json({msg:"new quote created successfully"})
})


module.exports = router;
