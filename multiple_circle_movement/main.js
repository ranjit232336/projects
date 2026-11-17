const { IsKeyPressed, KEY_S } = require("raylib");
const sketch = require("./sketch");

function loop(world) {

    let move = 0 ;

  while (sketch.running()) {

    if( IsKeyPressed( KEY_S ) )
        move = !move ;
    
    if( move )
      sketch.update( world.circles , world.angles);

    sketch.draw(world.circles);
  }
}

function main() {
  const world = sketch.setup();

  loop(world);

  sketch.teardown();
}

main();