const r = require("raylib") ;
const m = require("./math") ;
const c = require("./circle") ;

function running(){

    return !r.WindowShouldClose() ;

}

function teardown(){
    return r.CloseWindow() ;
}

function draw(circles){

    r.BeginDrawing() ;
    r.ClearBackground(r.BLACK) ;
    c.drawCircles( circles ) ;
    c.drawCurve( circles[ circles.length - 1 ] ) ;
    r.EndDrawing();

}

function update(circles , angles){

    c.updateCircle( circles , angles ) ;

}

function setup(){

    const screenWidth = 1500 ;
    const screenHeight = 1000 ;
    const screenTittle = "Multiples Circle Movement" ;

    r.SetTraceLogLevel(r.LOG_NONE) ;
    r.InitWindow( screenWidth , screenHeight , screenTittle ) ;
    r.SetTargetFPS(50) ;

    const screenConfig = { screenWidth , screenHeight , screenTittle } ;


    const radius = Math.min( screenWidth  / 3 , screenHeight  / 3 ) ;
    const circle0 = { x: screenWidth / 2 , y: screenHeight / 2 , r: radius , color: r.BLUE } ;


    const angles = [ 0  , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ] ;
    const noOfCircles = 9 ;
    // const angles = m.generateAngles(noOfCircles) ;
    const circles = c.generateCircles( circle0 , noOfCircles , angles ) ;
    
    return {screenConfig , circles , angles } ;

}


module.exports = {

    running ,
    teardown ,
    draw ,
    update ,
    setup ,

}