

let canvas = document.querySelector('canvas');
// brush == context
let ctx = canvas.getContext('2d');

// ctx.fillRect(100 , 200 , 150 , 50); // x . y . w . h

// ctx.fillStyle = 'red'; //red paint mei duba deta hu

// ctx.fillRect(100 , 200 , 150 , 50); // x . y . w . h

// ctx.strokeStyle = 'green';
// ctx.strokeRect(50 , 50 , 100 , 100);

// path

// ctx.beginPath();
// ctx.moveTo(40,40);
// ctx.lineTo(100,120);
// ctx.lineTo(200,220);
// ctx.lineTo(50,50);
// ctx.stroke();

// triangle

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(100,100);
// // ctx.stroke();
// ctx.fill();
// ctx.closePath();


// drawing text

ctx.font = '28px monospace';
ctx.fillStyle  = 'cyan'
ctx.fillText('Sachin bhai' , 140 , 100)



















