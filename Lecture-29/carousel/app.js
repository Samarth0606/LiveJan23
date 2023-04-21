


let arr = [
    'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682027888746-25b1af7bd47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681942920309-ad467696945f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682071607969-697c6c8a17a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681853176751-46a2f15cc30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
]


let img = document.querySelector('img');

let num = 0;

setInterval(() => {
    img.setAttribute('src' , arr[num] );
    num = (num + 1 ) % arr.length;
}, 3000);
















