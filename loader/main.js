const { IsKeyPressed, KEY_S } = require("raylib");
const sketch = require("./sketch") ;

function loop(world){

    let startMoving = 0

    while( sketch.running() ){
        if( IsKeyPressed( KEY_S ) ) startMoving = !startMoving ;
        sketch.draw(world.balls.generatedBalls , world.innerCircle , world.outerCircle) ;

        if( startMoving )
          sketch.update( world.screenConfig , world.balls.generatedBalls , world.movingBallInfo ) ;
        
    }

}

function main(){

    const world = sketch.setup() ;
    loop(world) ;

}

main() ;