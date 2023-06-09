const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');

let todos = ['gym','food','bath','cricket','bike']

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs')
app.use('/' , express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true})) //body parser


app.get('/' , (req,res)=>{
    res.send('csr VS ssr root route');
})

app.get('/todos' , (req,res)=>{
    if(req.xhr){
        console.log('ajax req hai')
        res.json(todos); //converts js object into json
    }
    else{
        console.log("server side")
        res.render('todos' , {todos})
    }
})

app.post('/todos' , (req,res)=>{
    let {todo} = req.body;
    todos.push(todo);
    res.redirect('/todos');
    // res.status(200).json({msg:'todos sent successfully'})
})

app.listen(8080 , ()=>{
    console.log("server conected at portwa 8080")
})




