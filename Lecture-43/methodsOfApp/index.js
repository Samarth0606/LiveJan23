//used for making server
const express = require('express'); //funcn
const app = express(); //object or instance


// adding app.use 
//without path i.e for all incoming request
// app.use(  (req , res)=>{ //middleware function //accepts a callback function
//     // console.log(req);
//     // console.log(res);
//     console.log('you made a request akshay');
//     res.send('<h1>mummy meri shadi krdo may june july mei</h1>')
// } )


// with path i.e for spcific path only and not in other cases
app.use( '/middleware' , (req , res)=>{ //middleware function //accepts a callback function
    // console.log(req);
    // console.log(res);
    console.log('you made a request at specific path middlewae');
    res.send('<h1>horn ok please</h1>')
} )

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})






