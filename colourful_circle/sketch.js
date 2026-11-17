const r = require("raylib") ;

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(500 , 500 , "Logo");
r.SetTargetFPS(1);


function drawBalls(radius){

    const color = {
        r: Math.floor( Math.random() * 256 ) ,
        g: Math.floor( Math.random() * 256 ) ,
        b: Math.floor( Math.random() * 256 ) ,
        a: 255 ,
    }

    r.DrawCircle( 250 + radius * Math.cos( 0 ) ,250 + radius * Math.sin( 0 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos(  45 *  Math.PI / 180 ) ,250 + radius * Math.sin( 45 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 90 *  Math.PI / 180 ) ,250 + radius * Math.sin( 90 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 135 *  Math.PI / 180 ) ,250 + radius * Math.sin( 135 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 180 *  Math.PI / 180 ) ,250 + radius * Math.sin( 180 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 225 *  Math.PI / 180 ) ,250 + radius * Math.sin( 225 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 270 *  Math.PI / 180 ) ,250 + radius * Math.sin( 270 *  Math.PI / 180 ) , 10 , color );
    r.DrawCircle( 250 + radius * Math.cos( 315 *  Math.PI / 180 ) ,250 + radius * Math.sin( 315 *  Math.PI / 180 ) , 10 , color );


}


function draw(){

    // r.DrawCircle( 250 , 250 , 150 , r.PINK )
    // r.DrawCircle( 250 + 150 * Math.cos( 0 ) ,250 + 150 * Math.sin( 0 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos(  45 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 45 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 90 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 90 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 135 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 135 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 180 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 180 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 225 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 225 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 270 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 270 *  Math.PI / 180 ) , 10 , r.BLUE );
    // r.DrawCircle( 250 + 150 * Math.cos( 315 *  Math.PI / 180 ) ,250 + 150 * Math.sin( 315 *  Math.PI / 180 ) , 10 , r.BLUE );
    // drawBalls( 150 );

    drawBalls( 20 ) ;
    drawBalls( 40 ) ;
    drawBalls( 60 ) ;
    drawBalls( 80 ) ;
    drawBalls( 100 ) ;
    drawBalls( 120 ) ;
    drawBalls( 140 ) ;
    drawBalls( 160 ) ;
    drawBalls( 180 ) ;
    drawBalls( 200 ) ;
    drawBalls( 220 ) ;
    drawBalls( 240 ) ;
    // drawBalls( 260 ) ;

}


while( !r.WindowShouldClose() ){


    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    draw();
    r.EndDrawing();


}

r.CloseWindow();