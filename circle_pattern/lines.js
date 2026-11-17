const r = require("raylib") ;

function drawLines(points , colors){

    for( let firstPoint = 0 ; firstPoint < points.length ; firstPoint ++ ){

        // const color = colors[ firstPoint ] ;

        for( let secondPoint = firstPoint - points.length / 3 ; secondPoint <  points.length / 3 + firstPoint  ; secondPoint ++ ){
        // for( let secondPoint = 0 ; secondPoint < points.length ; secondPoint ++ ){
            // let color = r.BLUE ;

            // if( secondPoint == firstPoint )
            //     color = r.GRAY ;
            // else if( secondPoint < firstPoint )
            const color = r.GREEN ;

            // r.DrawLineEx( points[ firstPoint ] , points[ secondPoint  % points.length ] , 1 , color ) ;
            
            if( secondPoint < 0 )
                r.DrawLineEx( points[ firstPoint ] , points[( points.length  + secondPoint)  % points.length ] , 1 , color ) ;

            else    
                r.DrawLineEx( points[ firstPoint ] , points[ secondPoint  % points.length ] , 1 , color ) ;

        }

    }

}

function generateColors(noOfPoints){

    const colors = [] ;

    for( let i = 0 ; i < noOfPoints ; i ++ ){

        const color = {
    
            r: Math.floor( Math.random() * 256 ),
            g: Math.floor( Math.random() * 256 ),
            b: Math.floor( Math.random() * 256 ),
            a: 255 ,
        }

        colors.push( color ) ;
    }

    return colors ;

}

module.exports = {

    drawLines ,
    generateColors ,

}