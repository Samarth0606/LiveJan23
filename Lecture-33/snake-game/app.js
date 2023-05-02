

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50; //height & width ka kaam krega for each cell
let boardHeight = 600;
let boardWidth = 1000;
let snakeCells = [ [0,0] ]; //2d array to store starting points of snake ka rectangle
let direction  = 'right';

let gameOver = false; //wall se touch hone ke baad hojaae true

// baar baar repeat
let intervalId = setInterval(function(){
    update();
    draw();
} , 100)

// keydown event is trigerred
document.addEventListener('keydown' , function(event){
    if(event.key === 'ArrowDown'){direction='down'}
    else if(event.key === 'ArrowUp'){direction='up'}
    else if(event.key === 'ArrowLeft'){direction='left'}
    else{direction = 'right'}
})


// function to draw snake
function draw(){
    if(gameOver === true){
        clearInterval(intervalId); //it accepts an id
        return;
    }

    ctx.clearRect(0,0,boardWidth,boardHeight);
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
    }

}



// function to update snake
function update(){
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;
    let newHeadX;
    let newHeadY;

    if(direction === 'right'){
         newHeadX = headX + cellSize;
         newHeadY = headY;
         if(newHeadX === boardWidth){gameOver = true}
    }
    else if(direction === 'left'){
         newHeadX = headX - cellSize;
         newHeadY = headY;
         if(newHeadX < 0){gameOver = true}
    }
    else if(direction === 'up'){
         newHeadX = headX;
         newHeadY = headY - cellSize;
         if( newHeadY < 0 ){gameOver = true}
    }
    else{
         newHeadX = headX;
         newHeadY = headY + cellSize;
         if(newHeadY === boardHeight){gameOver = true}
    }


    snakeCells.push([newHeadX , newHeadY]);
    snakeCells.shift();
}
















