document.addEventListener("DOMContentLoaded", () => {
    const playerCar = document.querySelector(".playerCar");
    const opponentCar = document.querySelector(".opponentCar");
    const road = document.querySelector(".road");
    const scoreDisplay = document.querySelector(".score");
  
    let playerCarLeft = road.offsetLeft + road.offsetWidth / 2 - 25;
    let opponentCarTop = 0;
    let score = 0;
    let playerCarSpeed = 10;
    let opponentCarSpeed = 5;
    const roadLeftBoundary = road.offsetLeft;
    const roadRightBoundary = roadLeftBoundary + road.offsetWidth;
  
    function moveOpponentCar() {
      opponentCarTop += opponentCarSpeed;
      if (opponentCarTop > window.innerHeight) {
        opponentCarTop = -100;
        opponentCar.style.left = `${
          Math.random() * (road.offsetWidth - 50) + roadLeftBoundary
        }px`;
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        opponentCarSpeed = 5 + Math.floor(score / 5);
      }
      opponentCar.style.top = `${opponentCarTop}px`;
    }
  
    function movePlayerCar(e) {
      if (e.key === "ArrowLeft") {
        playerCarLeft -= playerCarSpeed;
        if (playerCarLeft < roadLeftBoundary) playerCarLeft = roadLeftBoundary;
      } else if (e.key === "ArrowRight") {
        playerCarLeft += playerCarSpeed;
        if (playerCarLeft > roadRightBoundary - 50)
          playerCarLeft = roadRightBoundary - 50;
      }
      playerCar.style.left = `${playerCarLeft}px`;
    }
  
    function detectCollision() {
      const playerCarRect = playerCar.getBoundingClientRect();
      const opponentCarRect = opponentCar.getBoundingClientRect();
  
      return !(
        playerCarRect.bottom < opponentCarRect.top ||
        playerCarRect.top > opponentCarRect.bottom ||
        playerCarRect.right < opponentCarRect.left ||
        playerCarRect.left > opponentCarRect.right
      );
    }
  
    function gameLoop() {
      moveOpponentCar();
      if (detectCollision()) {
        alert(`Game Over! Your final score is ${score}`);
        window.location.reload();
      } else {
        requestAnimationFrame(gameLoop);
      }
    }
  
    document.addEventListener("keydown", movePlayerCar);
    gameLoop();
  });