

let express =  require('express');
let app = express();


app.get('/' , (req,res)=>{
    res.send('root route hai')
})


// app.get('/r/banana' , (req,res)=>{
//     res.send('banana route hai')
// })

// app.get('/r/orange' , (req,res)=>{
//     res.send('orange route hai')
// })
// app.get('/r/cat' , (req,res)=>{
//     res.send('cat route hai')
// })
// app.get('/r/dog' , (req,res)=>{
//     res.send('cat route hai')
// })
//infinite routes banane padh jaenge????

// subreddit
app.get( '/r/:subreddit' , (req,res)=>{
   console.log(req.params); //object
   let {subreddit} = req.params; //object destrucuture
   res.send(`<h2> my route was ${subreddit} </h2>`)
} )


app.listen(8080 , ()=>{
    console.log('server running at port 8080')
})


























