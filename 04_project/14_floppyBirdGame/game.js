// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 600;

// Define game constants
const PIPE_WIDTH = 80;
const PIPE_HEIGHT = 600;
const BIRD_SIZE = 40;
const GRAVITY = 0.2;
const JUMP_HEIGHT = -6;

// Define game variables
let birdX = canvas.width / 2;
let birdY = canvas.height / 2;
let pipeX = canvas.width;
let pipeY = canvas.height / 2;
let score = 0;
let birdVelocity = 0;

// Main game loop
function update() {
    // Move bird
    birdY += birdVelocity;
    birdVelocity += GRAVITY;

    // Move pipe
    pipeX -= 2;
    if (pipeX < -PIPE_WIDTH) {
        pipeX = canvas.width;
        pipeY = canvas.height / 2;
        score++;
    }

    // Collision detection
    if (birdX + BIRD_SIZE > pipeX &&
        birdX < pipeX + PIPE_WIDTH &&
        birdY + BIRD_SIZE > pipeY &&
        birdY < pipeY + PIPE_HEIGHT) {
        alert('Game Over!');
        location.reload();
    }

    // Draw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(pipeX, pipeY, PIPE_WIDTH, PIPE_HEIGHT);
    ctx.fillStyle = 'red';
    ctx.fillRect(birdX, birdY, BIRD_SIZE, BIRD_SIZE);
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`Score: ${score}`, 10, 10);

    // Update display
    requestAnimationFrame(update);
}

// Handle user input
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        birdVelocity = JUMP_HEIGHT;
    }
});

// Start the game
update();