const r = require("raylib");

function createPaddle(windowW, windowH, width, height) {
  return {
    x: Math.random() * (windowW - width),
    y: windowH - 2 * height,
    width,
    height,
  };
}

function drawPaddle(rect) {
  r.DrawRectangleRec(rect, r.BROWN);
}

function updatePaddlePosition(paddle, screen) {
  if (
    r.IsKeyPressed(r.KEY_RIGHT) ||
    (r.IsKeyDown(r.KEY_RIGHT) && paddle.x + paddle.width < screen.windowW)
  ) {
    paddle.x += 20;
  }
  if (r.IsKeyPressed(r.KEY_LEFT) || (r.IsKeyDown(r.KEY_LEFT) && paddle.x > 0))
    paddle.x -= 20;
}

module.exports = {
  createPaddle,
  drawPaddle,
  updatePaddlePosition,
};
