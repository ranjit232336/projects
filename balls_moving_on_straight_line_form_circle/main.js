const { IsKeyPressed, KEY_S } = require("raylib");
const sketch = require("./sketch");

function loop(world) {
  while (sketch.running()) {
    if (IsKeyPressed(KEY_S)) world.movement = !world.movement;

    if (world.movement) {
      sketch.update(world.balls, world.grooves);
    }

    sketch.draw(world.circle, world.grooves, world.balls);
  }
}

function main() {
  const world = sketch.setup(1500, 1000, 8, 15);

  loop(world);

  sketch.teardown();
}

main();
