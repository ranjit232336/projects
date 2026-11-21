const r = require("raylib");

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(500, 500, "Logo");
r.SetTargetFPS(1);

function sin(angle) {
  return Math.sin((angle * Math.PI) / 180);
}

function cos(angle) {
  return Math.cos((angle * Math.PI) / 180);
}

function drawBalls(radius) {
  const color = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
    a: 255,
  };

  for (let i = 0; i < 32; i++) {
    r.DrawCircle(
      250 + radius * cos((45 / 4) * i),
      250 + radius * sin((45 / 4) * i),
      10,
      color,
    );
  }
}

function draw() {
  for (let i = 1; i <= 12; i++) {
    drawBalls(20 * i);
  }
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  draw();
  r.EndDrawing();
}

r.CloseWindow();
