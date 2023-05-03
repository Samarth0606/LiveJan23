

// let products = document.querySelectorAll('section figure');
// console.log(products);

// not the optimsed way
// for(let item of products){
//     item.addEventListener('click' , function(){
//         console.log(this.innerText);
//     })
// }
// dynamically add kroge to dikkat dega


// -----------------------
// event Delegation  --> parent par event lagao rather thn child par

let section = document.getElementById('container');

section.addEventListener('click' , function(e){
    // console.log(e);
    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
})
























