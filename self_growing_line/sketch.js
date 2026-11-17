const r = require("raylib") ;


function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}

function setup(){


    const screenWidth = 1600 ;
    const screenHeight = 800 ;
    
    r.SetTraceLogLevel(r.LOG_NONE) ;
    r.InitWindow( screenWidth , screenHeight , "Test Slope" ) ;
    r.SetTargetFPS(200)

    const screenConfig = { screenWidth , screenHeight } ;

    const p1 = { x: screenWidth / 5 + Math.random() * screenWidth * 3 / 5 , y: screenHeight / 5 + Math.random() * screenHeight * 3 / 5 } ;
    const p2 = { x: screenWidth / 5 + Math.random() * screenWidth * 3 / 5 , y: screenHeight / 5 + Math.random() * screenHeight * 3 / 5 } ;
    
    const speed1 = { x: 1 , y: 1 } ;
    const speed2 = { x: 1 , y: 1 } ;
    
    if( p2.x < p1.x ){

        speed2.x *= -1 ;
    }
    else 
        speed1.x *= -1 ;
    
    if( p2.y < p1.y ){

        speed2.y *= -1 ;
    }
    else 
        speed1.y *= -1 ;
    

    const speed = { speed1 , speed2 } ;


    const points = { p1 , p2 } ;
    
        const collisionPoint = [] ;

        return {screenConfig , points , speed , collisionPoint } ;
    }



function calculateSlope( p1 , p2 ){

    return (p2.y - p1.y) / ( p2.x - p1.x ) ; 

}


function calculateAngleWithHorizontal( slope ){

    return Math.abs( Math.atan( slope ) * 180 / Math.PI ) ;

}


function update( points , speed , collisionPoint){

    let slope = calculateSlope( points.p1 , points.p2 ) ;

    if( collisionPoint.length > 0 )
        slope = calculateSlope( collisionPoint[ collisionPoint.length - 1 ] , points.p2 ) ;


    const angle = calculateAngleWithHorizontal( slope ) ;

    
    points.p2.x += speed.speed2.x * cos( angle ) ;
    points.p2.y += speed.speed2.y * sin( angle ) ;
    points.p1.x += speed.speed1.x * cos( angle ) ;
    points.p1.y += speed.speed1.y * sin( angle ) ;

    

}

function drawRays(points , collisionPoint){

    if( collisionPoint.length > 0 ){


        for( let i = 0 ; i < collisionPoint.length ; i ++ ){

            if( i == 0 )
                r.DrawLineEx( points.p1 , collisionPoint[i] , 2 , r.BLUE) ;
            else
                r.DrawLineEx( collisionPoint[i-1] , collisionPoint[i] , 2 , r.BLUE ) ;


        }

        r.DrawLineEx( collisionPoint[ collisionPoint.length - 1 ] , points.p2 , 2 , r.BLUE ) ;

    }

    else
        r.DrawLineEx( points.p1 , points.p2 , 2 , r.BLUE ) ;

}


function draw(points , collisionPoint){

    r.BeginDrawing() ;
    r.ClearBackground(r.BLACK) ;
    
    drawRays(points , collisionPoint)

    r.EndDrawing() ;


}

function loop(world){


    let start = 0 ;


    while( !r.WindowShouldClose() ){
    

        if( r.IsKeyPressed(r.KEY_S) )
            start = !start ;

        draw(world.points , world.collisionPoint) ;

        if( start )
            update( world.points  , world.speed , world.collisionPoint ) ;
    
    }

}

function main(){

    
    const world = setup() ;
    loop(world) ;
    r.CloseWindow() ;

}


main() ;




