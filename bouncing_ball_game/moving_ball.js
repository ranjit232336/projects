const r = require("raylib");

function createMovingBall(radius, paddleX, paddleY, paddleW, speed) {
  return {
    x: radius + paddleX + Math.floor(Math.random() * (paddleW - 2 * radius)),
    y: paddleY - radius,
    r: radius,
    color: r.BLUE,
    startGame: 0,
    dx: speed,
    dy: -speed,
  };
}

function updateMovingBallDirection(movingBall, paddle, screen) {
  if (movingBall.x + movingBall.r > screen.windowW) movingBall.dx *= -1;
  if (movingBall.x < movingBall.r) movingBall.dx *= -1;
  if (movingBall.y < movingBall.r) movingBall.dy *= -1;
  if (
    movingBall.y + movingBall.r > paddle.y &&
    movingBall.x >= paddle.x - movingBall.r / 2 &&
    movingBall.x <= paddle.x + movingBall.r / 2 + paddle.width
  )
    movingBall.dy *= -1;
}

function updateMovingBallPosition(movingBall) {
  movingBall.x += movingBall.dx;
  movingBall.y += movingBall.dy;
}

function drawMovingBall(movingBall) {
  r.DrawCircle(movingBall.x, movingBall.y, movingBall.r, movingBall.color);
}

module.exports = {
  createMovingBall,
  drawMovingBall,
  updateMovingBallDirection,
  updateMovingBallPosition,
};
