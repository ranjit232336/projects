function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}


function generateAngles(noOfCircles){
  
  const angles = [] ;
  
  for( let i = 0 ; i < noOfCircles ; i ++){
    
    const angle = Math.floor( Math.random() * 361 ) ;
    angles.push( angle ) ;
    
  }

  return angles ;
  
}


module.exports = { sin, cos , generateAngles };
