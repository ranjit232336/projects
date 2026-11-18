const r = require("raylib");
const c = require("./circle");
const g = require("./groove");
const b = require("./balls");

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  return r.CloseWindow();
}

function draw(circle, grooves, balls) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  c.drawCircle(circle);
  g.drawGroove(grooves);
  b.drawBall(balls);

  r.EndDrawing();
}

function update(balls, grooves) {
  b.updateBallsDirection(balls, grooves);
  b.updatePositionOfBalls(balls, grooves);
}

function setup(windowW, windowH, noOfGrooves, thickness) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Balls");
  r.SetTargetFPS(150);

  const angle = 360 / (2 * noOfGrooves);

  const circle = {
    x: windowW / 2,
    y: windowH / 2,
    r: Math.min(windowW / 3, windowH / 3),
    color: r.LIGHTGRAY,
  };

  const grooves = g.generateGrooves(
    noOfGrooves,
    { x: circle.x, y: circle.y },
    2 * circle.r,
    thickness,
    angle,
  );

  const balls = b.generateBalls(grooves);
  const movement = 0;

  return { circle, grooves, balls, movement };
}

module.exports = {
  running,
  teardown,
  draw,
  update,
  setup,
};
