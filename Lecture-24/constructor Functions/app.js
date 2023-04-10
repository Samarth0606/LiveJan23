



// function fun(){

// }
// let naam = fun();
// console.log(naam);




// constructor

// function user(){

//     this.username = 'samarth' ;
//     this.email = 'samarthvohra.india@gmail.com';

// }

// let user1 = new user();
// console.log(user1);




function User(user , mail){

    this.username = user ;
    this.email = mail ;

}

User.prototype.description = function(){
    return `my name is ${this.username}`
}

let user1 = new User('samarth' , 'samarthvohra.india@gmail.com');
let user2 = new User('coding blocks' , 'codingblocks.india@gmail.com');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());


