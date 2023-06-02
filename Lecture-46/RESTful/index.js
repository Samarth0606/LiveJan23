const express = require('express');
const app = express();
const path = require('path'); //module of nodejs no need to intall


// dummy array instead of DB
let comments = [
    {
        id:0,
        username: "Akshay" ,
        comment: "kuch nhi"
    },
    {
        id:1,
        username: "Sachin" ,
        comment: "kaun"
    },
    {
        id:2,
        username: "Javed" ,
        comment: "laal hai"
    },
    {
        id:3,
        username: "Ojaswa" ,
        comment: "Puls aagyi puls"
    }
] 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended:true})); //for form encoc=ded data


//  root 
app.get('/' , (req,res)=>{
    res.send("root mei aapka swagat hai")
})


// task-1 --> display all the blogs\
app.get('/blogs' , (req,res)=>{
    res.render('index' , {comments})
})


// task-2 --> show just a form for adding a new blog
app.get('/blog/new' , (req,res)=>{
    res.render('new')
})

// task-3 --> to actually add a blog in the DB
app.post('/blogs' , (req,res)=>{
    // console.log(req.body);
    // res.send("data aagya")
    let {username , comment} = req.body;
    comments.push({username , comment , id:comments.length});
    res.redirect('/blogs'); //yaad rakhna ki get req jaa rhi hai
})

// task-4 to show info about 1 particular blog
app.get('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let foundComment = comments.find(comment=> comment.id == id) //typecasting kyuki params are in string
    // console.log(foundComment);
    res.render('show' , {foundComment} );
    
})






app.listen(8080 , ()=>{
    console.log("server running at port 8080")
})

