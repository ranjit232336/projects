const r = require("raylib") ;
const m = require("./math") ;

function drawCircle(circle){

    r.DrawCircleLines( circle.x , circle.y , circle.r , circle.color );

}

function drawCircles( circles ){

    for( let i = 0 ; i < circles.length ; i ++ ){

        drawCircle( circles[i] ) ;

    }

}

function drawCurve(circle){

    r.DrawCircle( circle.x , circle.y , 3 , r.DARKGREEN ) ;

}


function updateCircle(circles , angles ){

    for( let i = 0 ; i < angles.length ; i ++ ){

        if( i == angles.length - 1 )
            angles[i] +=   ( i  ) ** 2  ;

        else
             angles[i] -=   ( i + 1 )  ;
        circles[ i + 1 ].x = circles[i].x + circles[i].r * m.cos( angles[i] ) ;
        
        circles[ i + 1 ].y = circles[i].y + circles[i].r * m.sin( angles[i] ) ;

    }

}

function generateCircles(mainCircle , noOfCircles , angles){

    const circles = [] ;
    circles.push( mainCircle ) ;

    for( let i = 0 ; i < noOfCircles ; i ++ ){

        const circle = { x: circles[i].x + circles[i].r * m.cos( angles[i] ) , y: circles[i].y + circles[i].r * m.sin( angles[i] ) , r: circles[i].r * 4 / 5 , color: r.BLUE } ;

        circles.push( circle ) ;

    }

    // circles.shift() ;

    return circles ;

}

module.exports = {

    drawCircles ,
    updateCircle ,
    drawCurve ,
    generateCircles ,

}