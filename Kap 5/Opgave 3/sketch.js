let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  while (i < 100) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    fill(0, 0, 255);
    text(i, x, y);
    i = i + 1;
  }
}
