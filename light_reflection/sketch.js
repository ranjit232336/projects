const r = require("raylib");
const ray = require("./ray.js");
const cal = require("./calc.js");

function setup() {
  const screenWidth = 1600;
  const screenHeight = 900;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screenWidth, screenHeight, "Test Slope");
  r.SetTargetFPS(500);

  const screenConfig = { screenWidth, screenHeight };

  const container = {
    x: 0,
    y: 0,
    width: screenWidth,
    height: screenHeight,
  };

  const p1 = {
    x: container.x + Math.random() * container.width,
    y: container.y + Math.random() * container.height,
  };
  const p2 = {
    x: container.x + Math.random() * container.width,
    y: container.y + Math.random() * container.height,
  };

  const ray1 = { p1, p2, speed: { x: 5, y: 5 }, collisionPoint: [] };

  const rays = [ray1];

  cal.decideVelcityOfRays(rays);

  return { screenConfig, rays, container };
}

function update(container, rays) {
  ray.updateRay(container, rays);
}

function draw(container, rays) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  ray.drawRays(container, rays);

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  return r.CloseWindow();
}

function startMovingRays() {
  return r.IsKeyPressed(r.KEY_S);
}

module.exports = {
  setup,
  draw,
  update,
  running,
  teardown,
  startMovingRays,
};
