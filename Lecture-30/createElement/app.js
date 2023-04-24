


// document.createElement('h1')
// document.createElement('h2')
let paapiLaal = document.createElement('div');
let foolanDevi = document.createElement('div');

let arti = document.getElementById('arti');

paapiLaal.innerText = 'paapi chulo';
foolanDevi.innerText = 'foolan devi missing sachin baby';


// arti.appendChild(paapiLaal); //only html
// arti.appendChild(paapiLaal , foolanDevi); //wrong way

// multiple elements
arti.append(paapiLaal , foolanDevi , 'mai ziddi hu sachin ka teesra vaala kid : dharamwati');
// html + text


// starting mei add kro

arti.prepend(paapiLaal , foolanDevi , 'mai ziddi hu sachin ka teesra vaala kid : dharamwati' )
// html + text













