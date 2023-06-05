const express = require('express');
const app = express();
const path = require('path'); //module of nodejs no need to intall
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');
// dummy array instead of DB
let comments = [
    {
        // id:0,
        id:uuid(), //returns an id i.e a string
        username: "Akshay" ,
        comment: "kuch nhi"
    },
    {
        // id:1,
        id:uuid(),
        username: "Sachin" ,
        comment: "kaun"
    },
    {
        // id:2,
        id:uuid(),
        username: "Javed" ,
        comment: "laal hai"
    },
    {
        // id:3,
        id:uuid(),
        username: "Ojaswa" ,
        comment: "Puls aagyi puls"
    }
] 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended:true})); //for form encoc=ded data
app.use(methodOverride('_method')) //method-overding for post to patch

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
    comments.push({username , comment , id:uuid()});
    res.redirect('/blogs'); //yaad rakhna ki get req jaa rhi hai
})

// task-4 to show info about 1 particular blog
app.get('/blogs/:id' , (req,res)=>{
    let {id} = req.params; //string always
    // console.log(id);
    let foundComment = comments.find(comment=> comment.id == id) //typecasting kyuki params are in string
    // console.log(foundComment);
    res.render('show' , {foundComment} );
    
})

// task-5 to get the form for editing the blog
app.get('/blogs/:id/edit' , (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=> comment.id == id) //typecasting kyuki params are in string
    console.log(foundComment);
    res.render('edit' , {foundComment});
})


// task-6 actually editing the blog using patch and not put
app.patch('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    // console.log(req.params)
    let foundComment = comments.find(comment=> comment.id == id) //typecasting kyuki params are in string
    // let foundComment = comments.find((comment)=>{return  comment.id == id }) //typecasting kyuki params are in string
    // console.log(foundComment);
    let {comment} = req.body;
    foundComment.comment = comment; //changing already present data to newly calc data
    res.redirect('/blogs');
})


// task-7 to delete a blog from the DB
app.delete('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    let newArray = comments.filter((comment)=>{return comment.id != id })
    comments = newArray;
    res.redirect('/blogs');
})




app.listen(8080 , ()=>{
    console.log("server running at port 8080")
})

