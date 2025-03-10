const gameContainer = document.getElementById('game-container');
const basket = document.getElementById('basket');
const fallingObject = document.getElementById('falling-object');

let basketPosition = gameContainer.offsetWidth / 2 - basket.offsetWidth / 2;
let fallingObjectPosition = { x: Math.random() * (gameContainer.offsetWidth - fallingObject.offsetWidth), y: 0 };
let score = 0;

basket.style.left = `${basketPosition}px`;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === 'ArrowRight' && basketPosition < gameContainer.offsetWidth - basket.offsetWidth) {
        basketPosition += 20;
    }
    basket.style.left = `${basketPosition}px`;
});

function updateFallingObject() {
    fallingObjectPosition.y += 5;
    if (fallingObjectPosition.y > gameContainer.offsetHeight) {
        fallingObjectPosition.y = 0;
        fallingObjectPosition.x = Math.random() * (gameContainer.offsetWidth - fallingObject.offsetWidth);
    }
    fallingObject.style.top = `${fallingObjectPosition.y}px`;
    fallingObject.style.left = `${fallingObjectPosition.x}px`;

    if (fallingObjectPosition.y + fallingObject.offsetHeight >= gameContainer.offsetHeight - basket.offsetHeight &&
        fallingObjectPosition.x + fallingObject.offsetWidth >= basketPosition &&
        fallingObjectPosition.x <= basketPosition + basket.offsetWidth) {
        score++;
        fallingObjectPosition.y = 0;
        fallingObjectPosition.x = Math.random() * (gameContainer.offsetWidth - fallingObject.offsetWidth);
        console.log('Score:', score);
    }

    requestAnimationFrame(updateFallingObject);
}

updateFallingObject();
