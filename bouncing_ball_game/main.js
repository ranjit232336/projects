const sketch = require("./sketch");

function loop(
  movingBall,
  targetBalls,
  screen,
  paddle,
  gameStatus,
  screen,
  noOfBalls,
) {
  while (sketch.running()) {
    if (sketch.hasKeyBeenPressed()) {
      movingBall.startGame = !movingBall.startGame;
    }
    if (movingBall.startGame) {
      sketch.update(
        targetBalls,
        movingBall,
        screen,
        paddle,
        gameStatus,
        noOfBalls,
      );
    }
    sketch.draw(targetBalls, movingBall, paddle, gameStatus, screen, noOfBalls);
  }
}

function main() {
  const world = sketch.setup(1500, 800, 30, 10);
  loop(
    world.movingBall,
    world.targetBalls,
    world.screen,
    world.paddle,
    world.gameStatus,
    world.screen,
    world.noOfBalls,
  );
  sketch.teardown();
}

main();
