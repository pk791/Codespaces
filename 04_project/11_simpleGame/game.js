const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 5
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawPlayer();
    requestAnimationFrame(update);
}

function movePlayer(event) {
    switch(event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
}

document.addEventListener('keydown', movePlayer);
update();
