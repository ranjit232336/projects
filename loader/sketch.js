const r= require("raylib") ;
const b= require("./balls");


function drawBalls(balls){

    for( const ball of balls ){
        
        r.DrawCircle( ball.x , ball.y , ball.r , ball.color ) ;

    }

}

function draw(balls , innerCircle , outerCircle){
    
    r.BeginDrawing() ;
    r.ClearBackground(r.WHITE) ;
    drawBalls( balls ) ;
    r.EndDrawing() ;

}

function update( screenConfig ,balls , movingBallInfo){

    b.updateBalls( screenConfig , balls , movingBallInfo )

}

function running(){
    return !r.WindowShouldClose()
}

function teardown(){
    return r.CloseWindow()
}



function setup(){

    const screenWidth = 1200 ;
    const screenHeight = 800 
    const screenTittle = "Loader" ;

    r.SetTraceLogLevel(r.LOG_NONE) ;
    r.InitWindow( screenWidth , screenHeight , screenTittle ) ;
    r.SetTargetFPS(400) ;

    const screenConfig = { screenWidth , screenHeight , screenTittle } ;

    const noOfBalls = 8 ;
    const radiusOfCircle = 20 ;
    const colorOfRadius = r.GRAY ;


    const innerRadius = 70 ;
    const outerRadius = 120 ;


    const innerCircle = { x: screenWidth / 2 , y: screenHeight / 2 , r: innerRadius , color: r.RED }
    const movingBallInfo = { movingBallNo: 0 , innerRadius , outerRadius , dX: 1 , dY: 1 } ;
    const outerCircle = { x: screenWidth / 2 , y: screenHeight / 2 , r: outerRadius , color: r.RED }
    const balls = { radius: radiusOfCircle , color: colorOfRadius , noOfBalls } ;

    const generatedBalls = b.generateBalls( screenConfig , balls , innerRadius );
    balls.generatedBalls = generatedBalls ;
    const ballsOriginalPosition =  b.generateBalls( screenConfig , balls , innerRadius );
    balls.ballsOriginalPosition = ballsOriginalPosition ;

    return { screenConfig , balls , movingBallInfo , innerCircle , outerCircle} ;

}

module.exports={

    setup ,
    draw ,
    update , 
    running ,
    teardown ,

}