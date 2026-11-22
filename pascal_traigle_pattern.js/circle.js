// const { DrawCircle, BLUE } = require("raylib");
const r = require("raylib");
const m = require("./math.js");

function generatePoints(noOfRows, startingPoint, radius) {
  const points = [];

  for (let i = 0; i < noOfRows; i++) {
    const pointInRow = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0 && i == 0) {
        const x = startingPoint.x;
        const y = startingPoint.y;

        const point = { x, y };

        pointInRow.push(point);
      } else if (j === 0 && i !== 0) {
        const x = points[i - 1][0].x - 2 * radius * m.cos(60);
        const y = points[i - 1][0].y + 2 * radius * m.sin(60);

        const point = { x, y };

        pointInRow.push(point);
      } else {
        const x = pointInRow[j - 1].x + 2 * radius;
        const y = pointInRow[j - 1].y;

        const point = { x, y };

        pointInRow.push(point);
      }
    }

    points.push(pointInRow);
  }
  return points;
}

function drawCircles(points, radius, values) {
  //   for (let pointInRow of points) {
  //     for (const point of pointInRow) {
  //       r.DrawCircle(point.x, point.y, radius, r.BLUE);
  //     }
  //   }

  for (let i = 0; i < points.length; i++) {
    const pointInRow = points[i];

    for (let j = 0; j < pointInRow.length; j++) {
      const color = values[i][j] % 2 === 0 ? r.BLACK : r.GREEN;

      r.DrawCircle(pointInRow[j].x, pointInRow[j].y, radius, color);
    }
  }
}

module.exports = {
  generatePoints,
  drawCircles,
};
