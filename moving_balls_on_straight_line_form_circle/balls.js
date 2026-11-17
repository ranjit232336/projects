const r = require("raylib");
const m = require("./math");

function createBall(x, y, r, color , move12) {
  return {
    x,
    y,
    r,
    color,
    move12 ,
    speed: 1,
  };
}

function generateBalls(grooves) {
    
  const balls = [];
  for (let i = 0; i < grooves.length; i++) {

    let ball = {} ;
    if( grooves[i].angle === 22.5  ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length  / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length  / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 45 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length  / 4 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length  / 4 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 67.5 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length * 3 / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length * 3 / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 90 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length * 4 / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length * 4 / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 112.5 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length * 5 / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length * 5 / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 135 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length * 6 / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length * 6 / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }
    else if( grooves[i].angle === 157.5 ){

            ball = createBall(
            grooves[i].p1.x - (grooves[i].length * 7 / 8 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].length * 7 / 8 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            0 ,
          ) 
    }

    else{
            ball = createBall(
            grooves[i].p1.x - (grooves[i].thickness  / 2 ) * m.sin(grooves[i].angle),
            grooves[i].p1.y - (grooves[i].thickness  / 2 ) * m.cos(grooves[i].angle),
            grooves[i].thickness / 2,
            r.RED,
            1 ,
          ) 
    }

    balls.push(ball) ;
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
    if (grooves[i].angle < 90 && isBallOutOfGroove(grooves[i], balls[i])) {
        balls[i].move12 = !balls[i].move12;
    }
    if (grooves[i].angle >= 90 && isBallOutOfGroove(grooves[i], balls[i])) {
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
    // balls[i].speed += 0.01;
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

function resetBalls(balls , grooves){
    console.log(balls);
    

    // for( const ball of balls ){
    for( let i = 0 ; i < balls.length ; i++ ){


        if( grooves[i].angle >= 180 ){
            balls[i].x -= grooves[i].length / 8 * m.sin( grooves[i].angle ) ;
            balls[i].y -= grooves[i].length / 8 * m.cos( grooves[i].angle ) ;
            
        }
    }    


    // }

    return balls ;

}

module.exports = {
  createBall,
  drawBall,
  generateBalls,
  updateBallsDirection,
  updatePositionOfBalls,
  resetBalls ,
};