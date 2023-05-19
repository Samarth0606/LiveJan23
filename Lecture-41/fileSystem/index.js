


let fs = require('fs');

// console.log(fs);

//we will perform CRUD (CREATE , READ , UPDATE , DELETE)

//CREATE or write in fs

// let data = 'neha maam data sendkr rhi hai and web bohat aache se revise k rhi hai';
// let data2 = 'changed data hu mai';

// fs.writeFile('abc.txt' , data , {
//     encoding:'utf-8' , 
//     flag: 'w'
// } , (err)=>{
//     if(err) {throw err}
//     console.log("file written succesfully")
// })

// or

// fs.writeFileSync('abc.txt' , data2)


// ------------------------------

// READ 

// fs.readFile('abc.txt' , {
//     encoding:'utf-8', //to avoid buffer
//     flag: 'r'
// } ,(err , data)=>{
//     if(err){throw err}
//     console.log(data)
// } )

// or

// let data = fs.readFileSync('abc.txt');
// console.log(data);
// console.log(data.toString());


// ------------------------------
// UPDATE

// fs.appendFile('abc.txt' , 'samarth ka bhaukaal' , (err)=>{
//     if(err){ throw err}
//     console.log("update krdiya tere bhai ne")
// })


// or

// fs.appendFileSync('abc.txt' , ' aag lage basti mei sachin bhai masti mei')



// -----------------------------

//DELETE

// fs.unlink('abc.txt' , (err)=>{
//     if(err) {throw err}
//     console.log("mai badmaash hu maine hata dia")
// })

// or

// fs.unlinkSync('abc.txt')



