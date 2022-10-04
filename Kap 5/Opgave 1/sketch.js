let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 100; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
  }
}
