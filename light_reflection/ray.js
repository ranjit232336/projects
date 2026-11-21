const r = require("raylib");
const cal = require("./calc");

function drawRays(container, rays) {
  r.DrawRectangleLines(
    container.x,
    container.y,
    container.width,
    container.height,
    r.RED,
  );

  for (let i = 0; i < rays.length; i++) {
    if (rays[i].collisionPoint.length > 0) {
      for (let j = 0; j < rays[i].collisionPoint.length; j++) {
        if (j == 0)
          r.DrawLineEx(rays[i].p1, rays[i].collisionPoint[j], 2, r.BLUE);
        else
          r.DrawLineEx(
            rays[i].collisionPoint[j - 1],
            rays[i].collisionPoint[j],
            2,
            r.BLUE,
          );
      }

      r.DrawLineEx(
        rays[i].collisionPoint[rays[i].collisionPoint.length - 1],
        rays[i].p2,
        2,
        r.BLUE,
      );
    } else r.DrawLineEx(rays[i].p1, rays[i].p2, 2, r.BLUE);
  }
}

function updateDirectionOfRay(container, rays) {
  for (let i = 0; i < rays.length; i++) {
    if (rays[i].p2.x >= container.x + container.width) {
      rays[i].speed.x *= -1;

      const x = rays[i].p2.x;
      const y = rays[i].p2.y;

      const point = { x, y };

      rays[i].collisionPoint.push(point);
    }
    if (rays[i].p2.x <= container.x) {
      rays[i].speed.x *= -1;
      const x = rays[i].p2.x;
      const y = rays[i].p2.y;

      const point = { x, y };

      rays[i].collisionPoint.push(point);
    }
    if (rays[i].p2.y >= container.y + container.height) {
      rays[i].speed.y *= -1;
      const x = rays[i].p2.x;
      const y = rays[i].p2.y;

      const point = { x, y };

      rays[i].collisionPoint.push(point);
    }
    if (rays[i].p2.y <= container.y) {
      rays[i].speed.y *= -1;
      const x = rays[i].p2.x;
      const y = rays[i].p2.y;

      const point = { x, y };

      rays[i].collisionPoint.push(point);
    }
  }
}

function updateRay(container, rays) {
  for (let i = 0; i < rays.length; i++) {
    let slope = cal.calculateSlope(rays[i].p1, rays[i].p2);

    if (rays[i].collisionPoint.length > 0) {
      slope = cal.calculateSlope(
        rays[i].collisionPoint[rays[i].collisionPoint.length - 1],
        rays[i].p2,
      );
    }

    const angle = cal.calculateAngleWithHorizontal(slope);

    updateDirectionOfRay(container, rays);

    rays[i].p2.x += rays[i].speed.x * cal.cos(angle);
    rays[i].p2.y += rays[i].speed.y * cal.sin(angle);
  }
}

module.exports = {
  drawRays,
  updateDirectionOfRay,
  updateRay,
};
