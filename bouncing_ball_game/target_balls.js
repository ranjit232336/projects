const r = require("raylib");

function createTargetBall(x, y, r, color) {
  return {
    x,
    y,
    r,
    color,
    display: true,
  };
}

function drawTargetBalls(targetBalls, noOfBalls) {
  for (let i = 0; i < noOfBalls - 1; i++) {
    if (targetBalls[i].display) {
      r.DrawCircle(
        targetBalls[i].x,
        targetBalls[i].y,
        targetBalls[i].r,
        targetBalls[i].color,
      );
    }
  }
}

function generateTargetBallsColor(noOfBalls) {
  const targetBallsColor = [];
  for (let i = 0; i < noOfBalls - 1; i++) {
    const color = {
      r: Math.floor(256 * Math.random()),
      g: Math.floor(256 * Math.random()),
      b: Math.floor(256 * Math.random()),
      a: 255,
    };
    targetBallsColor.push(color);
  }

  return targetBallsColor;
}

function generateTargetBalls(targetBallsColor, radius, noOfBalls) {
  const targetBalls = [];
  for (let i = 0; i < noOfBalls - 1; i++) {
    targetBalls.push(
      createTargetBall(
        radius + radius * 2 * i,
        radius,
        radius,
        targetBallsColor[i],
      ),
    );
  }

  return targetBalls;
}

function hasCollided(x1, y1, x2, y2, d) {
  return distance(x1, y1, x2, y2) <= d;
}

function updateTargetBallsDisplay(movingBall, targetBalls, noOfBalls) {
  for (let i = 0; i < noOfBalls - 1; i++) {
    if (
      hasCollided(
        movingBall.x,
        movingBall.y,
        targetBalls[i].x,
        targetBalls[i].y,
        2 * movingBall.r,
      )
    ) {
      targetBalls[i].display = false;
    }
  }
}

function distance(x1, y1, x2, y2) {
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

module.exports = {
  createTargetBall,
  distance,
  drawTargetBalls,
  hasCollided,
  generateTargetBallsColor,
  generateTargetBalls,
  updateTargetBallsDisplay,
};
