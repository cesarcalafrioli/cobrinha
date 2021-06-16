let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

let direction = "right";

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

// Dar vida à cobrinha
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    // Posição inicial
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    // Movimento conforme as direcionais
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

//// FIM DAS FUNÇÕES //////
///////////////////////////

let jogo = setInterval(iniciarJogo, 100);