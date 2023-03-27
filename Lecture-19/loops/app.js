
// for loop
// for(let i=0 ; i<=5 ; i = i+1){

//     for(let j=0 ; j<=5 ; j = j+1){

//         if(i === j){
//             break;
//         }

//         console.log(i , j);

//     }

// }


// while 
// let num  = 100;

// while(num >= 0){
//     console.log(num);
//     num = num - 10;
// }


// for-in (objects)
let person = {
    name:'sam',
    age:27,
    isMale:true
}
let array = ['sam' , 'hardik' , 'akshay' , 'sachin']

for(let item in person){
    console.log(`${item} --> ${person[item]}`);
}


// for-of (arrays, maps,lists,vectors)
for(let item of array){
    console.log(item);
}