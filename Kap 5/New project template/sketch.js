let x = 200;
let y = 200;
let r = 30;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  for (r = 1; r < 400; r++) {
    circle(x, y, r);
  }
}
