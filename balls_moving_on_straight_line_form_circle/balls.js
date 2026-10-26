const r = require("raylib");
const m = require("./math");

function createBall(x, y, r, color) {
  return {
    x,
    y,
    r,
    color,
    move12: 1,
    speed: 1,
  };
}

function generateBalls(grooves) {
  const balls = [];
  for (let i = 0; i < grooves.length; i++) {
    balls.push(
      createBall(
        grooves[i].p1.x - (grooves[i].thickness / 2) * m.sin(grooves[i].angle),
        grooves[i].p1.y - (grooves[i].thickness / 2) * m.cos(grooves[i].angle),
        grooves[i].thickness / 2,
        r.RED,
      ),
    );
  }

  return balls;
}

function isBallOutOfGroove(groove, ball) {
  if (groove.angle < 90) {
    if (
      ball.y > groove.p1.y - (groove.thickness / 2) * m.cos(groove.angle) ||
      ball.y <= groove.p2.y + (groove.thickness / 2) * m.cos(groove.angle)
    ) {
      return true;
    }
  }
  if (groove.angle >= 90) {
    if (
      ball.x > groove.p1.x - (groove.thickness / 2) * m.sin(groove.angle) ||
      ball.x <= groove.p2.x + (groove.thickness / 2) * m.sin(groove.angle)
    ) {
      return true;
    }
  }

  return false;
}

function updateBallsDirection(balls, grooves) {
  for (let i = 0; i < balls.length; i++) {
    if (grooves[i].angle < 90) {
      if (isBallOutOfGroove(grooves[i], balls[i]))
        balls[i].move12 = !balls[i].move12;
    }
    if (grooves[i].angle >= 90) {
      if (isBallOutOfGroove(grooves[i], balls[i]))
        balls[i].move12 = !balls[i].move12;
    }
  }
}

function updatePositionOfBalls(balls, grooves) {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].move12) {
      balls[i].x -= m.sin(grooves[i].angle);
      balls[i].y -= m.cos(grooves[i].angle);
    } else {
      balls[i].x += m.sin(grooves[i].angle);
      balls[i].y += m.cos(grooves[i].angle);
    }

    // if (balls[i].move12) {
    //   balls[i].x -= balls[i].speed * m.sin(grooves[i].angle);
    //   balls[i].y -= balls[i].speed * m.cos(grooves[i].angle);
    // } else {
    //   balls[i].x += balls[i].speed * m.sin(grooves[i].angle);
    //   balls[i].y += balls[i].speed * m.cos(grooves[i].angle);
    // }
    // updateBallSpeed(balls[i], grooves[i]);
    // // balls[i].speed += 0.01;
  }
}

function isInBetween(a, x, y) {
  return a <= x && a >= y;
}

function updateBallSpeed(ball, groove) {
  if (groove.angle < 90) {
    if (ball.move12 && isInBetween(ball.y, groove.p1.y, groove.centre.y))
      ball.speed++;
    if (ball.move12 && isInBetween(ball.y, groove.centre.y, groove.p2.y))
      ball.speed--;
    if (!ball.move12 && isInBetween(ball.y, groove.centre.y, groove.p2.y))
      ball.speed++;
    if (!ball.move12 && isInBetween(ball.y, groove.p1.y, groove.centre.y))
      ball.speed--;
  }
  if (groove.angle >= 90) {
    if (ball.move12 && isInBetween(ball.x, groove.p1.x, groove.centre.x))
      ball.speed++;
    if (ball.move12 && isInBetween(ball.x, groove.centre.x, groove.p2.x))
      ball.speed--;
    if (!ball.move12 && isInBetween(ball.x, groove.centre.x, groove.p2.x))
      ball.speed++;
    if (!ball.move12 && isInBetween(ball.x, groove.p1.x, groove.centre.x))
      ball.speed--;
  }
}

function drawBall(balls) {
  for (let i = 0; i < balls.length; i++) {
    r.DrawCircle(balls[i].x, balls[i].y, balls[i].r, balls[i].color);
  }
}

module.exports = {
  createBall,
  drawBall,
  generateBalls,
  updateBallsDirection,
  updatePositionOfBalls,
};
