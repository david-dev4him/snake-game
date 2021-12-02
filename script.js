let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box, 
  y: Math.floor(Math.random() * 15 + 1) * box
}


function makeBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);

}

function makeSnake(){
    for(i=0; 1 < snake.length; i++){
      context.fillStyle = "green";
      context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box)
}



function startGame(){
  makeBG();
  makeSnake();
  drawFood();
  
  let snakex = snake[0].x;
  let snakey = snake[0].y;

  if(direction =="right") snakex += box;
  if(direction == "left") snakex -= box;
  if(direction == "up") snakey -= box;
  if(direction == "down") snakey += box;

  snake.pop();

  let newHead = {

    x: snakex,
    y: snakey
  }

  snake.unshift(newHead);
}

let game = setInterval(startGame, 100);

makeBG();

//parei no início da parte 4//