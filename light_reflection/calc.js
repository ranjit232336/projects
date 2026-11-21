function decideVelcityOfRays(rays) {
  for (let i = 0; i < rays.length; i++) {
    if (rays[i].p2.x < rays[i].p1.x) rays[i].speed.x *= -1;

    if (rays[i].p2.y < rays[i].p1.y) rays[i].speed.y *= -1;
  }
}

function calculateSlope(p1, p2) {
  return (p2.y - p1.y) / (p2.x - p1.x);
}

function calculateAngleWithHorizontal(slope) {
  return Math.abs((Math.atan(slope) * 180) / Math.PI);
}

function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}

module.exports = {
  decideVelcityOfRays,
  calculateAngleWithHorizontal,
  calculateSlope,
  sin,
  cos,
};
