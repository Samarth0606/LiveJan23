
const express = require('express'); //fun
const app = express(); //obj or instance



app.get('/search' , (req,res)=>{
    console.log(req.query);

    console.log(req.query.search); //key //output:1
    let {search} = req.query; //destructure
    console.log(search); //output:2
    // res.send(search);
    // res.send(req.query)
    res.send(req.query.search)

} )






app.listen(8080 , ()=>{
    console.log('mera server chal gya at 8080')
})













