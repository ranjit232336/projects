const r = require("raylib") ;


function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}

function decideVelcityOfRays(rays){

    for( let i = 0 ; i < rays.length ; i ++ ){

        if( rays[i].p2.x < rays[i].p1.x )
            rays[i].speed.x *= -1 ;
        
        if( rays[i].p2.y < rays[i].p1.y )
            rays[i].speed.y *= -1 ;
    }

}

function setup(){


    const screenWidth = 1600 ;
    const screenHeight = 900 ;
    
    r.SetTraceLogLevel(r.LOG_NONE) ;
    r.InitWindow( screenWidth , screenHeight , "Test Slope" ) ;
    r.SetTargetFPS(500)

    const screenConfig = { screenWidth , screenHeight } ;

    // const p1 = { x: 400 , y: 500 } ;
    // const p2 = { x: 370 , y: 600 } ;

    // const speed = { x: 1 , y: 1 } ;

    // const collisionPoint = [] ;

    const container = { x: screenWidth / 5 , y: screenHeight / 5 , width: screenWidth * 2 / 5 , height: screenHeight * 2 / 5 }

    
    // const ray2 = { p1: { x: 100 , y: 200 } , p2: { x: 210 , y: 210 } , speed: { x: 1 , y: 1 } , collisionPoint: []} ;
    
    const p1 = { x: container.x  + Math.random() * container.width , y: container.y  + Math.random() * container.height   }
    const p2 = { x: container.x  + Math.random() * container.width , y: container.y  + Math.random() * container.height   }
    
    const ray1 = { p1 , p2 , speed: { x: 1 , y: 1 } , collisionPoint: []} ;

    const rays = [  ray1 ] ;

    decideVelcityOfRays( rays ) ;


    return {screenConfig , rays ,container} ;
}



function calculateSlope( p1 , p2 ){

    return (p2.y - p1.y) / ( p2.x - p1.x ) ; 

}


function calculateAngleWithHorizontal( slope ){

    return Math.abs( Math.atan( slope ) * 180 / Math.PI ) ;

}


// const slope = calculateSlope( p1 , p2 ) ;

// const angle = calculateAngleWithHorizontal( slope ) ;

// console.log(angle);

function updateDirectionOfRay(container , rays){


    for( let i = 0 ; i < rays.length ; i ++ ){


        if( rays[i].p2.x >= container.x + container.width ){
    
            rays[i].speed.x *= -1 ;
            
            const x = rays[i].p2.x ;
            const y = rays[i].p2.y ;
    
            const point = { x , y  } ;
    
            rays[i].collisionPoint.push( point ) ;
            
        }
        if( rays[i].p2.x <= container.x ){
            
            rays[i].speed.x *= -1 ;
            const x = rays[i].p2.x ;
            const y = rays[i].p2.y ;
        
            const point = { x , y } ;
            
            rays[i].collisionPoint.push( point ) ;
            
        }
        if( rays[i].p2.y >= container.y + container.height ){
            
            rays[i].speed.y *= -1 ;
            const x = rays[i].p2.x ;
            const y = rays[i].p2.y ;
        
            const point = { x , y } ;
        
            rays[i].collisionPoint.push( point ) ;
            
        }
        if( rays[i].p2.y <= container.y ){
            
            rays[i].speed.y *= -1 ;
            const x = rays[i].p2.x ;
            const y = rays[i].p2.y ;
            
            const point = { x , y } ;
        
            rays[i].collisionPoint.push( point ) ;
            
        }
        // console.log(rays[i].collisionPoint);
    }



    
}

function update(container , rays ){

    for( let i = 0 ; i < rays.length ; i ++ ){


        let slope = calculateSlope( rays[i].p1 , rays[i].p2 ) ;
    
        if( rays[i].collisionPoint.length > 0 ){

            // console.log(slope);
            // console.log(rays[i].collisionPoint);
            
            slope = calculateSlope( rays[i].collisionPoint[rays[i].collisionPoint.length - 1 ] ,rays[i].p2 ) ;
        }
    
        
        const angle = calculateAngleWithHorizontal( slope ) ;
        // console.log(angle);
        
        updateDirectionOfRay( container , rays) ;
    
        // console.log(angle);
        rays[i].p2.x += rays[i].speed.x * cos( angle ) ;
        rays[i].p2.y += rays[i].speed.y * sin( angle ) ;

    }
    
    
    

}

function drawRays(container ,rays){

    r.DrawRectangleLines( container.x , container.y , container.width , container.height , r.RED ) ;

    for( let i = 0 ; i < rays.length ; i ++ ){



        if( rays[i].collisionPoint.length > 0 ){
    
    
            for( let j = 0 ; j < rays[i].collisionPoint.length ; j ++ ){
    
                if( j == 0 )
                    r.DrawLineEx( rays[i].p1 , rays[i].collisionPoint[j] , 2 , r.BLUE) ;
                else
                    r.DrawLineEx( rays[i].collisionPoint[j-1] , rays[i].collisionPoint[j] , 2 , r.BLUE ) ;
    
    
            }
    
            r.DrawLineEx( rays[i].collisionPoint[ rays[i].collisionPoint.length - 1 ] , rays[i].p2 , 2 , r.BLUE ) ;
    
        }
    
        else
            r.DrawLineEx( rays[i].p1 , rays[i].p2 , 2 , r.BLUE ) ;
    }

}


function draw(container , rays){

    r.BeginDrawing() ;
    r.ClearBackground(r.BLACK) ;
    
    // r.DrawLineEx( points.p1 , points.p2 , 2 , r.BLUE ) ;
    drawRays(container , rays)

    r.EndDrawing() ;


}

function loop(world){


    let start = 0 ;


    while( !r.WindowShouldClose() ){
    

        if( r.IsKeyPressed(r.KEY_S) )
            start = !start ;

        draw(world.container , world.rays) ;

        if( start )
            update( world.container , world.rays ) ;
    
    }

}

function main(){

    
    const world = setup() ;
    loop(world) ;
    r.CloseWindow() ;

}


main() ;




