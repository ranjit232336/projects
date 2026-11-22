const r = require("raylib");
const m = require("./math");
// const { drawLines } = require("../circle_pattern/lines");

function drawHexagon(hexagon) {
  const { vertices, radius } = hexagon;

  for (let i = 0; i < 6; i++) {
    r.DrawLineEx(
      {
        x: 400 + 100 * m.cos(45 * (i + 1)),
        y: 400 + 100 * m.sin(45 * (i + 1)),
      },
      {
        x: 400 + 100 * m.cos(45 * (i + 2)),
        y: 400 + 100 * m.sin(45 * (i + 2)),
      },
      r.GREEN,
    );
  }

  // r.DrawLineEx( { x: 400 + 100 * m.cos( 45 * (  1 )) , y: 400 + 100 * m.sin( 45 * (  1 )  ) } , { x: 400 + 100 * m.cos( 45 * (  )) , y: 400 + 100 * m.sin( 45 * (  )  ) } , r.GREEN ) ;
}
