const r = require("raylib");
const m = require("./math");
const c = require("./circle");
const l = require("./lines");
const p = require("./points");

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  return r.CloseWindow();
}

function draw(points, circles, colors) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  c.drawCircles(circles);

  l.drawLines(points, colors);
  r.EndDrawing();
}

function update(circles, angles) {
  c.updateCircle(circles, angles);
}

function setup() {
  const screenWidth = 1500;
  const screenHeight = 1000;
  const screenTittle = "Multiples Circle Movement";

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screenWidth, screenHeight, screenTittle);
  r.SetTargetFPS(50);

  const screenConfig = { screenWidth, screenHeight, screenTittle };

  const radius = Math.min(screenWidth / 3, screenHeight / 3);
  const circle0 = {
    x: screenWidth / 2,
    y: screenHeight / 2,
    r: radius,
    color: r.GREEN,
  };

  const circles = [circle0];

  const noOfPoints = 30;

  const colors = l.generateColors(noOfPoints);

  const points = p.generatePoints(circle0, noOfPoints);

  return { screenConfig, circles, points, colors };
}

module.exports = {
  running,
  teardown,
  draw,
  update,
  setup,
};
