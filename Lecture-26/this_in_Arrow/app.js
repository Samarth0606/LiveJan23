




// let obj = {
//     num: 3 , 
//     fn: function(){
//         console.log(this);
//     }
// }
// obj.fn();


//5. arrow function
// let obj = {     //this --> window
//     num: 3 , 
//     fn: ()=>{
//         console.log(this);
//     }
// }
// obj.fn();


// question:
let obj = {
    num:30,
    fn: function(){
        let calculate = ()=>{
            console.log(this) //parent ke this ko
        }
        calculate();
    }
}

obj.fn(); //method calling





