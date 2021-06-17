/* script.js
Autor = César Calafrioli
Data = 14/06/2021
Última modificação = 17/06/2021
*/
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

//////////////////////////
///////// FUNÇÕES ////////
// Criar background
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// Criar a cobrinha
function criarCobrinha(){
    for( i = 0 ; i < snake.length; i++ ) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Cria a comida
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update ( event ) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

// Dar vida à cobrinha
function iniciarJogo(){

    // Se a cabeça da cobra se chocar com o corpo, o jogo para
    for ( i = 1 ; i < snake.length; i++ ){
        if ( snake[0].x == snake[i].x && snake[0].y == snake[i].y ){
            clearInterval(jogo);
            alert('Game Over!');
        }
    }

    // Reposiciona a cobrinha para o lado oposto
    if ( snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if ( snake[0].x < 0 && direction == "left" ) snake[0].x = 16 * box;
    if ( snake[0].y > 15 * box && direction == "up" ) snake[0].y = 0;
    if ( snake[0].y < 0 && direction == "down" ) snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    // Posição inicial
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    // Movimento conforme as direcionais
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
       food.x = Math.floor(Math.random() * 15 + 1) * box;
       food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

//// FIM DAS FUNÇÕES //////
///////////////////////////

let jogo = setInterval(iniciarJogo, 200);