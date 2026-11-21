const r = require("raylib");

function drawCircle(circle) {
  r.DrawCircleLines(circle.x, circle.y, circle.r, circle.color);
}

function drawCircles(circles) {
  for (let i = 0; i < circles.length; i++) {
    drawCircle(circles[i]);
  }
}

module.exports = {
  drawCircles,
};
