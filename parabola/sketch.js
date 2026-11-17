const r = require("raylib") ;

function setup(){

    const screenWidth = 1000 ;
    const screenHeight = 700 ;
    const screenTittle = "Parabola" ;

    r.SetTraceLogLevel(r.LOG_NONE) ;
    r.InitWindow( screenWidth , screenHeight , screenTittle ) ;
    r.SetTargetFPS( 100 ) ;

    const screenConfig = { screenWidth , screenHeight , screenTittle } ;

    const circle = { x: screenWidth / 2 , y: screenHeight / 2   , r: 5 , color: r.RED } ;

    return { screenConfig , circle } ;

}


function drawCircle(circle){

    r.DrawCircle( circle.x , circle.y , circle.r , circle.color ) ;

}

function draw(circle){

    r.BeginDrawing()
    // r.ClearBackground(r.BLACK) ;

    drawCircle(circle)

    r.EndDrawing() ;

}

function update(screenConfig , circle){

    circle.x ++ ;

    circle.y = screenConfig.screenHeight / 2 +  1 / 300 *  ( screenConfig.screenWidth / 2 - circle.x ) ** 2 ;

    // circle.y = screenConfig.screenHeight - 100 * Math.exp( circle.x )

}

function loop( screenConfig , circle ){

    let start = 0 ;

    while( !r.WindowShouldClose() ){

        if( r.IsKeyPressed(r.KEY_S) )   start = !start ;

        if( start ){

            update( screenConfig , circle ) ;
        }
        
        draw( circle ) ;


    }

}

function main(){

    const world = setup() ;

    loop( world.screenConfig , world.circle ) ;

}

main() ;