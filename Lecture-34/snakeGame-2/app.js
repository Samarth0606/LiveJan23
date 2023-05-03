

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50; //height & width ka kaam krega for each cell
let boardHeight = 600;
let boardWidth = 1000;

let snakeCells = [ [0,0] ]; //2d array to store starting points of snake ka rectangle

let direction  = 'right';

let gameOver = false; //wall se touch hone ke baad hojaae true

let foodCells = generateFood(); //becoz we need 2 values i.e x and y

let score = 0;

// baar baar repeat
let intervalId = setInterval(function(){
    update();
    draw();
} , 150)

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
        ctx.fillStyle = 'red';
        ctx.font = '50px monospace'
        ctx.fillText('GAME OVER !!' , 350 , 300)
        return;
    }

    // draw snake
    ctx.clearRect(0,0,boardWidth,boardHeight);
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
        ctx.strokeStyle = 'orange';
        ctx.strokeRect(cell[0] , cell[1] , cellSize , cellSize);
    }

    // draw food
    ctx.fillStyle = 'green'
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize );

    // draw score
    ctx.font = '24px monospace'
    ctx.fillText(`Score: ${score}` , 20 , 25);

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
         if(newHeadX === boardWidth || khagyaKhudko(newHeadX,newHeadY) ){gameOver = true}
    }
    else if(direction === 'left'){
         newHeadX = headX - cellSize;
         newHeadY = headY;
         if(newHeadX < 0 || khagyaKhudko(newHeadX,newHeadY) ){gameOver = true}
    }
    else if(direction === 'up'){
         newHeadX = headX;
         newHeadY = headY - cellSize;
         if( newHeadY < 0 || khagyaKhudko(newHeadX,newHeadY) ){gameOver = true}
    }
    else{
         newHeadX = headX;
         newHeadY = headY + cellSize;
         if(newHeadY === boardHeight || khagyaKhudko(newHeadX,newHeadY) ){gameOver = true}
    }


    snakeCells.push([newHeadX , newHeadY]);

    if(newHeadX === foodCells[0] && newHeadY === foodCells[1] ){
        foodCells = generateFood();
        score += 1;
    }
    else{
        snakeCells.shift();
    }

}


function generateFood(){
    return [
        Math.round((Math.random()*(boardWidth - cellSize)) / cellSize) * cellSize,
        Math.round((Math.random()*(boardHeight - cellSize)) / cellSize) * cellSize,
    ]
}


function khagyaKhudko(newHeadX , newHeadY){
    // loop
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}












