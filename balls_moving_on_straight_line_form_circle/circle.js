const r = require("raylib");

function drawCircle(circle) {
  r.DrawCircle(circle.x, circle.y, circle.r, circle.color);
}

module.exports = { drawCircle };
