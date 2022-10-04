let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 100; i += 2) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    fill(255, 0, 0);
    text(i, x, y);
  }
}
