function createBall(ball){

    return {
        x: ball.x ,
        y: ball.y ,
        r: ball.r ,
        color: ball.color , 
        angle: ball.angle ,
    }

}

function sin(angle){
    return Math.sin(angle * Math.PI / 180)
}
function cos(angle){
    return Math.cos(angle * Math.PI / 180)
}

function generateBalls(screenConfig ,balls , positionRadius){

    const generatedBalls = [];
    for( let i = 0 ; i < balls.noOfBalls ; i++ ){

        const x = screenConfig.screenWidth / 2 + positionRadius * cos(  45 * i ) ;
        const y = screenConfig.screenHeight / 2 + positionRadius * sin(  45 * i ) ;

        const ball = createBall( { x , y , r: balls.radius , color: balls.color , angle:  45 * i } ) ;

        generatedBalls.push(ball);

    }

    return generatedBalls;

}

function updateBalls( screenConfig , balls , movingBallInfo){
    
    
    
    const ball = balls[ movingBallInfo.movingBallNo % 8 ] ;

    ball.x += movingBallInfo.dX * cos( ball.angle ) ;
    ball.y += movingBallInfo.dY * sin( ball.angle ) ;

    if( ball.angle == 0 ){
     
          if( ball.x >= screenConfig.screenWidth / 2 + movingBallInfo.outerRadius * cos( ball.angle ) )
        {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        }
    
        if( ball.x < screenConfig.screenWidth / 2 + movingBallInfo.innerRadius * cos( ball.angle ) )
        {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        movingBallInfo.movingBallNo++ ;
        }

    }
    if( ball.angle == 180 ){
     
          if( ball.x <= screenConfig.screenWidth / 2 + movingBallInfo.outerRadius * cos( ball.angle ) )
        {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        }
    
        if( ball.x >= screenConfig.screenWidth / 2 + movingBallInfo.innerRadius * cos( ball.angle ) )
        {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        movingBallInfo.movingBallNo++ ;
        }

    }

    if( ball.angle > 180 ){

        if( ball.y <= screenConfig.screenHeight / 2 + movingBallInfo.outerRadius * sin( ball.angle ) )
    {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
    }
    
    if( ball.y >= screenConfig.screenHeight / 2 + movingBallInfo.innerRadius * sin( ball.angle ) )
    {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        movingBallInfo.movingBallNo++ ;
    }
    

    }
    if( ball.angle < 180 && ball.angle > 0  ){
       

    
        if( ball.y >= screenConfig.screenHeight / 2 + movingBallInfo.outerRadius * sin( ball.angle ) )
    {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
    }
    
    if( ball.y <= screenConfig.screenHeight / 2 + movingBallInfo.innerRadius * sin( ball.angle ) )
    {
        movingBallInfo.dX *= -1 ;
        movingBallInfo.dY *= -1 ;
        movingBallInfo.movingBallNo++ ;
    }
    
    

    }

    
}

module.exports = {

    generateBalls ,
    updateBalls ,

}