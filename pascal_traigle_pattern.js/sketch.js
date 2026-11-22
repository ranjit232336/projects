const r = require("raylib");
const c = require("./circle");
const b = require("./binomial_coefficients");

function setup() {
  const screenHeight = 1200;
  const screenWidth = 1200;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screenWidth, screenHeight, "Pascal Traigle");
  r.SetTargetFPS(60);

  const radius = 1;
  const noOfRows = 0;
  const startingPoint = { x: screenWidth / 2, y: screenHeight / 50 };
  const points = c.generatePoints(noOfRows, startingPoint, radius);

  const values = b.getBinomialCoeffValues(noOfRows);

  return { points, radius, values, noOfRows, startingPoint };
}

function update(world) {
  if (r.IsKeyPressed(r.KEY_DOWN) || r.IsKeyDown(r.KEY_DOWN)) world.noOfRows++;
  if (r.IsKeyPressed(r.KEY_UP) || r.IsKeyDown(r.KEY_UP)) world.noOfRows--;

  world.points = c.generatePoints(
    world.noOfRows,
    world.startingPoint,
    world.radius,
  );
  world.values = b.getBinomialCoeffValues(world.noOfRows);
}

function draw(world) {
  const { points, radius, values } = world;
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  c.drawCircles(points, radius, values);

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  return r.CloseWindow();
}

module.exports = {
  setup,
  draw,
  running,
  teardown,
  update,
};
