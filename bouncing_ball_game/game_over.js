const r = require("raylib");

function gameOverScreen(screen) {
  r.DrawText("Game Over", screen.windowW / 2, screen.windowH / 2, 50, r.RED);
}

function updateGameStatus(movingBall, screen, gameStatus) {
  if (movingBall.y > screen.windowH) gameStatus.gameOver = 1;
}

module.exports = {
  gameOverScreen,
  updateGameStatus,
};
