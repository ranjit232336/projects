const r = require("raylib");
const tb = require("./target_balls");
const mb = require("./moving_ball");
const pd = require("./paddle");
const gmo = require("./game_over");

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  r.CloseWindow();
}

function hasKeyBeenPressed() {
  return r.IsKeyPressed(r.KEY_S);
}

function update(
  targetBalls,
  movingBall,
  screen,
  paddle,
  gameStatus,
  noOfBalls,
) {
  pd.updatePaddlePosition(paddle, screen);

  mb.updateMovingBallDirection(movingBall, paddle, screen);
  mb.updateMovingBallPosition(movingBall);
  tb.updateTargetBallsDisplay(movingBall, targetBalls, noOfBalls);
  gmo.updateGameStatus(movingBall, screen, gameStatus);
}

function draw(targetBalls, movingBall, paddle, gameStatus, screen, noOfBalls) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  if (!gameStatus.gameOver) {
    mb.drawMovingBall(movingBall);
    tb.drawTargetBalls(targetBalls, noOfBalls);
    pd.drawPaddle(paddle);
  }

  if (gameStatus.gameOver) {
    gmo.gameOverScreen(screen);
  }

  r.EndDrawing();
}

function setup(windowW, windowH, radiusOfBalls, speed) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, " Bouncing Ball ");
  r.SetTargetFPS(400);

  const noOfBalls = Math.floor((windowW / 2) * radiusOfBalls);
  const screen = { windowW, windowH };
  const paddle = pd.createPaddle(windowW, windowH, 200, 20);

  const movingBall = mb.createMovingBall(
    radiusOfBalls,
    paddle.x,
    paddle.y,
    paddle.width,
    speed,
  );

  const targetBallsColor = tb.generateTargetBallsColor(noOfBalls);
  const targetBalls = tb.generateTargetBalls(
    targetBallsColor,
    radiusOfBalls,
    noOfBalls,
  );

  const gameStatus = { gameOver: 0 };

  return { movingBall, targetBalls, screen, paddle, noOfBalls, gameStatus };
}

module.exports = {
  setup,
  draw,
  running,
  teardown,
  update,
  hasKeyBeenPressed,
};
