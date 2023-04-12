
// constructor function
// function Person(firstname , lastname , mail){
//     this.firstName = firstname;
//     this.lastName = lastname;
//     this.email = mail;
// }

// Person.prototype.printName = function(){
//     console.log(`My name is ${this.firstName} ${this.lastName}`)
// }
// Person.prototype.getName = function(){
//     return(`${this.firstName} ${this.lastName}`)
// }

// let person1 = new Person('sam' , 'vohra' , 'sam@gmail.com');
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());


// ------------------


// class syntax
class Person {

    constructor(firstname , lastname , mail){
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = mail;
    }

    getName(){
        return(`${this.firstName} ${this.lastName}`)
    }
    printName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }

}

class Student extends Person{
    constructor(firstname , lastname , mail , groupNo){
        super(firstname , lastname , mail);
        this.group = groupNo;
    }
    getName(){
        return(`super se bhi upar ${this.firstName} ${this.lastName}`)
    }

}

let student1 = new Student('barack' , 'obama' , 'obama@gmail.com' , 10 )

console.log(student1);
console.log(student1.email);
console.log(student1.group);
console.log(student1.getName());




// let person2 = new Person('ms' , 'dhoni' , 'msd@gmail.com')

// console.log(person2);
// console.log(person2.email);
// console.log(person2.lastName);
// console.log(person2.printName());
// console.log(person2.getName());













