const r = require("raylib");

function setup() {
  const screenWidth = 1800;
  const screenHeight = 700;
  const screenTittle = "Rolling";

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screenWidth, screenHeight, screenTittle);
  r.SetTargetFPS(30);

  const screenConfig = { screenWidth, screenHeight, screenTittle };

  const ground = {
    x: 0,
    y: (screenHeight * 3) / 5,
    width: screenWidth,
    height: 10,
    color: r.GRAY,
  };

  const wheelRadius = 50;
  const lineAngle = 90;
  const deltaAngle = 0;
  const wheel = {
    x: 2 * wheelRadius,
    y: ground.y - wheelRadius,
    r: wheelRadius,
    color: r.WHITE,
    lineAngle,
    deltaAngle,
  };

  return { screenConfig, ground, wheel };
}

function sin(angle) {
  return Math.sin((angle * Math.PI) / 180);
}

function cos(angle) {
  return Math.cos((angle * Math.PI) / 180);
}

function drawWheel(wheel) {
  r.DrawCircle(wheel.x, wheel.y, wheel.r, wheel.color);
}

function drawGround(ground) {
  r.DrawRectangle(
    ground.x,
    ground.y,
    ground.width,
    ground.height,
    ground.color,
  );
}

function drawLine(wheel) {
  const p1 = { x: wheel.x, y: wheel.y };
  const p2 = {
    x: p1.x + wheel.r * cos(wheel.lineAngle),
    y: p1.y + wheel.r * sin(wheel.lineAngle),
  };

  const pMid = {
    x: p1.x + (wheel.r / 2) * cos(wheel.lineAngle),
    y: p1.y + (wheel.r / 2) * sin(wheel.lineAngle),
  };

  r.DrawCircle(p2.x, p2.y, 3, r.RED);
  r.DrawCircle(p1.x, p1.y, 3, r.GREEN);
  r.DrawCircle(pMid.x, pMid.y, 3, r.BLUE);
}

function draw(ground, wheel) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawGround(ground);
  drawWheel(wheel);
  drawLine(wheel);

  r.EndDrawing();
}

function update(wheel) {
  wheel.lineAngle += 1;

  wheel.x += ((1 * Math.PI) / 180) * wheel.r;
}

function loop(ground, wheel) {
  let start = 0;

  while (!r.WindowShouldClose()) {
    if (r.IsKeyPressed(r.KEY_S)) start = !start;

    if (start) update(wheel);

    draw(ground, wheel);
  }
}

function main() {
  const world = setup();

  loop(world.ground, world.wheel);
}

main();
