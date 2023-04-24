




let arti = document.querySelector('article');

// 1. add()
// arti.classList.add('sam')
// arti.classList.add('sam samarth') //wrong way

arti.classList.add('sam' , 'samarth' , 'neha' , 'maniket') 

arti.classList.add('changu-mangu')


//2.remove()

arti.classList.remove('sam' , 'maniket');

// 3. toggle

// arti.classList.toggle('toggle')
//true
// arti.classList.toggle('toggle')
//false

//4. contains(); //returns a  boolen value t/f

console.log(arti.classList.contains('sachin')) ; //false
console.log(arti.classList.contains('sam')) ; //false
console.log(arti.classList.contains('samarth')) ; //true

