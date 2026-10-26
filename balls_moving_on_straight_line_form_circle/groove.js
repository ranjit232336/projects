const r = require("raylib");
const m = require("./math");

function createGroove(centre, angle, length, thickness) {
  return {
    p1: {
      x: centre.x + (length / 2) * m.sin(angle),
      y: centre.y + (length / 2) * m.cos(angle),
    },

    p2: {
      x: centre.x + (length / 2) * m.sin(180 + angle),
      y: centre.y + (length / 2) * m.cos(180 + angle),
    },

    centre,
    thickness,
    angle,
  };
}

function generateGrooves(noOfGrooves, centre, length, thickness, angle) {
  const grooves = [];
  for (let i = 0; i < noOfGrooves; i++) {
    grooves.push(createGroove(centre, i * angle, length, thickness));
  }
  return grooves;
}

function drawGroove(grooves) {
  for (let i = 0; i < grooves.length; i++) {
    r.DrawLineEx(grooves[i].p1, grooves[i].p2, grooves[i].thickness, r.BROWN);
  }
}

module.exports = { createGroove, drawGroove, generateGrooves };
