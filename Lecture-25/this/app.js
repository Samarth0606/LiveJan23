


// 1. regular invocation

// function fn(){
//     console.log(this);
// }

// fn();



// 2. method invocation

// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn();  //this is pointing to the object over which it is called



// question: 

// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this);
//     }
// }

// let myFun = obj.fn;
// myFun(); //regular calling

// question:
// let obj2 = {
//     num : 20,
//     fn: function(){
//         function calculate(){
//             console.log(this);
//         }
//         calculate(); //regular calling
//     }
// }

// obj2.fn();



// 3. constructor function calling

// function CreateObj(){
//     this.x = 20;
// }

// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x);

//newly created object ko this point krega hamesha


// 4. .call() , .apply() , .bind()   //polymorphism achive hor hai with call and apply

// let obj = {
//     a: 20 ,
//     fn: function(a,b,c){
//         console.log(this, a, b, c);
//     }
// }
// let obj2 = {
//     a : 50
// }

// let obj3 = {
//     name : 'samarth'
// }

// obj.fn();
// obj2.fn(); //error
// obj.fn.call(obj3);
// obj.fn.call(obj , 1 , 2 , 3);
// obj.fn.apply(obj,[ 5 , 6 , 7 ]);

// jab bhi tum .call() method ka istemaal kr rhe hote ho tab jo aap call ke andar mention krte ho aapka this usse point krta hai.  


// .bind()

// let obj3 = {
//     num:3,
//     fn: function(){
//         console.log(this);
//     }
// }

// let myFun = obj3.fn.bind(obj3);  //context of this
// myFun(); //regular invocation

// let myFun = obj3.fn.bind(obj3);
// myFun();



// next class
//5. arrow functions 


















