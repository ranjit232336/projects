const r = require("raylib");

const setup = function () {
  const screenWidth = 900;
  const screenHeight = 900;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screenWidth, screenHeight, "Circle");
  r.SetTargetFPS(50);

  const circle = { x: screenWidth / 2, y: screenHeight / 2, r: 400 };

  const smallestCircleRadius = 5;

  const noOfUpperCircle = Math.floor(circle.r / smallestCircleRadius);

  return { circle, smallestCircleRadius, noOfUpperCircle };
};

const drawUpperCircle = function (
  noOfUpperCircle,
  circle,
  smallestCircleRadius,
) {
  for (let i = 1; i <= noOfUpperCircle; i++) {
    r.DrawCircleSectorLines(
      { x: circle.x - circle.r + i * smallestCircleRadius, y: circle.y },
      i * smallestCircleRadius,
      90,
      270,
      1000,
      r.RED,
    );
  }
};
const drawLowerCircle = function (
  noOfUpperCircle,
  circle,
  smallestCircleRadius,
) {
  for (let i = 1; i <= noOfUpperCircle; i++) {
    r.DrawCircleSectorLines(
      { x: circle.x + circle.r - i * smallestCircleRadius, y: circle.y },
      i * smallestCircleRadius,
      -90,
      90,
      1000,
      r.RED,
    );
  }
};

const draw = function (circle, noOfUpperCircle, smallestCircleRadius) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawCircleLines(circle.x, circle.y, circle.r, r.RED);

  drawUpperCircle(noOfUpperCircle, circle, smallestCircleRadius);
  drawLowerCircle(noOfUpperCircle, circle, smallestCircleRadius);

  r.EndDrawing();
};

const loop = function (world) {
  while (!r.WindowShouldClose()) {
    draw(world.circle, world.noOfUpperCircle, world.smallestCircleRadius);
  }
};

const main = function () {
  const world = setup();

  loop(world);
};

main();
