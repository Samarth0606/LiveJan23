




// cond. 1
// function a(akshay){ //HOF
//     console.log('hi i am inside A');
//     akshay();
// }

// function b(){
//     console.log('hi i am inside B'); 
// }

// a(b);



// cond. 2

// function a(){
//     console.log('inside a');
//     function b(){
//         console.log('inside b');
//     }

//     return b;
// }

// let temp = a();
// console.log(temp);


// real life usage

// function getBoolean(array){
//     let result = [];
//     for(let item of array){
//         if(typeof item === 'boolean'){
//             result.push(item);
//         }
//     }
//     return result;

// }

// function getString(array){
//     let result = [];
//     for(let item of array){
//         if(typeof item === 'string'){
//             result.push(item);
//         }
//     }
//     return result;
// }


// function getNumber(array){
//     let result = [];
//     for(let item of array){
//         if(typeof item === 'number'){
//             result.push(item);
//         }
//     }
//     return result;
// }


// let arr = ['sam' , 'samarth' , 10, 20 , true , false , true];

// console.log(getBoolean(arr)) ;
// console.log(getString(arr)) ;
// console.log(getNumber(arr)) ;



// optimised HOF way

// check my type
function getBoolean(item){
    return typeof item === 'boolean'
}
function getString(item){
    return typeof item === 'string'
}
function getNumber(item){
    return typeof item === 'number'
}

// loop and result append krna

function get(array , fn){
    let result = [];
    for(let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}


let arr = ['sam' , 'samarth' , 10, 20 , true , false , true];

console.log(get(arr , getBoolean)) ;
console.log(get(arr , getString)) ;
console.log(get(arr , getNumber)) ;