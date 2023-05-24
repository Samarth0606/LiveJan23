
const express = require('express'); //funcn
const app = express(); //object or instance


// get

app.get('/' , (req,res)=>{ //path , cb   //root -> '/'
    res.send('<h3> ye mera "/" path hai </h3>')
}) 

app.get('/cat' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/cat" path hai </h3>')
}) 

app.get('/dog' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/dog" path hai </h3>')
}) 


app.get('/orange' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/orange" path hai </h3>')
}) 

app.get('/watermelon' , (req,res)=>{ //path , cb
    res.send('<h3> Laal hai poora thela laal hai </h3>')
}) 

//bad request ko handle //--> always at he last
app.get('*' , (req,res)=>{
    res.send(" abeeyy saaale ")
})





app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})












