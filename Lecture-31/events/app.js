

// inline way
// function doSomething(){

//     console.log('hello inline event');
// }


// 2nd way
// let btn = document.querySelector('button');

//onclick event
// btn.onclick = function(){
//     console.log("hello duniya doosra tareeka")
// }

// mouseenter event
//btn.onmouseenter = function(){
//   btn.style.color='red';
//}
// mouseleave event
// btn.onmouseleave = function(){
    // btn.style.color='black';
// }


// this is to show that only 1 event is possible at a atime 
// let btn = document.querySelector('button');


// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two');
// }


// btn.onclick = one;
// btn.onclick = two;


// solution: use eventListener
// it allows you to run multiple events listener on the same element

// let btn = document.querySelector('button');

// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two');
// }

// btn.addEventListener( 'click' ,  one ); //accepts 2 args
// btn.addEventListener( 'click' ,  two ); //accepts 2 args

//question 1: btn click --> body ka background color = palm


// let btn = document.querySelector('button');
// let bodyEl = document.querySelector('body');

// btn.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = 'plum'
// });

// onclick --> ek baar click kiya to chala
//ondblclick --> 2 baar click kiya to chala
let btn = document.querySelector('button');

function meraFun(){
    console.log("2 baar dabaya hai ek baar");
}


btn.addEventListener("dblclick" , meraFun );


