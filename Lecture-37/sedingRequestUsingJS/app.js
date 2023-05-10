
let ul = document.querySelector('ul');

// XMLHttpsRequest -- methods 1
let req = new XMLHttpRequest();

// CONNECTION BANA HAI BASICALLY
// req.open('GET' , 'https://inshorts.deta.dev/news?category=science');
req.open('GET' , 'https://inshorts.deta.dev/news?category=entertainment')

// BHEJNI HAI APNI REQUEST/DEMAND
req.send();

// jab sahi salamat data mile or jab saara kaam sahi se hojaae 
req.onload = function(){
    // console.log(this , 'SAM');
    let samachaar = JSON.parse(this.response);
    // console.log(samachaar);
    for(let d of samachaar.data){
        let li = document.createElement('li');
        li.innerHTML = `
            <img src=${d.imageUrl} height="100px" />
            <span>${d.title}</span>
        `
        ul.appendChild(li);
    }
}

// lekin agar erorr aaya to 
req.onerror = function(){
    console.log(this);
}





















