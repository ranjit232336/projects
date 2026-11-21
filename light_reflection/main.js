const sketch = require("./sketch");

function loop(world) {
  let start = 0;

  while (sketch.running()) {
    if (sketch.startMovingRays()) start = !start;

    sketch.draw(world.container, world.rays);

    if (start) sketch.update(world.container, world.rays);
  }
}

function main() {
  const world = sketch.setup();
  loop(world);
  sketch.teardown();
}

main();
