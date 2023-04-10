


// function anything(){
//     let naam = 'mohammad';

//     function printNaam(){
//         console.log(naam);
//     }
//     // printNaam();
//     return printNaam;
// }

// let fun = anything(); //yahan return hogi

// fun();




// -----------------
// real life uses

// function counter(){
//     let count = 0;

//     function getCount(){
//         return count;
//     }
//     return getCount;

// }
// let counter1 = counter();
// console.log(counter1());



// function counter(){
//     let count = 0;

//     return {
//         getCount : function(){
//             return count;
//         }
//     };

// }
// let counter1 = counter();
// console.log(counter1.getCount()); //0



// application small
function counter(){
    let count = 0;

    return {
        getCount: function(){
            return count;
        }, 
        increment: function(){
            count+=1; 
        } ,
        decrement: function(){
            count-=1;
        },
        reset: function(){
            count = 0;
        }
    };

}

let counter1 = counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());




