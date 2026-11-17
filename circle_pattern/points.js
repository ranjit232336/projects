const m = require("./math") ;

function generatePoints( circle ,noOfPoints){

    const angularDisplacement = 360 / noOfPoints ;
    let angle = 0 ;
    const points = [] ;

    for( let i = 0 ; i < noOfPoints ; i ++ ){

        const x = circle.x + circle.r * m.cos( angle ) ;
        const y = circle.y + circle.r * m.sin( angle ) ;

        const point = { x , y } ;

        points.push( point ) ;

        angle += angularDisplacement ;

    }

    return points ;

}


module.exports = {
    
    generatePoints 

}