



// let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , function(event){
//     event.preventDefault();   //default behv. rok deta hai
//     console.log('form submitted');
// } )

// now my browser will not be refreshed.


// accessing the elements in the form
let formEl = document.querySelector('form');

formEl.addEventListener('submit' ,function(e){
    e.preventDefault();
    console.log(formEl.elements[0].value);
    console.log(formEl.elements[1].value);
})









