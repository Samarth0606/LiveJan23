

let grandParent =  document.getElementById('grandParent');
let parent =  document.getElementById('parent');
let child =  document.getElementById('child');

// bydefault --> false
// grandParent.addEventListener('click' , ()=>{
//     console.log('grandFather clicked !!')
// } , true)

// parent.addEventListener('click' , ()=>{
//     console.log('Father clicked !!')
// } , true)

// child.addEventListener('click' , ()=>{
//     console.log('Child clicked !!')
// } , true)

// question
grandParent.addEventListener('click' , (event)=>{
    console.log('grandFather clicked !!')
} , true)

parent.addEventListener('click' , (event)=>{
    // console.log(event);
    event.stopPropagation();
    console.log('Father clicked !!')
} , true)

child.addEventListener('click' , (event)=>{
    console.log('Child clicked !!')
} , true)






















