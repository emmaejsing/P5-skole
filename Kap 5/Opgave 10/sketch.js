let a = 5;
let speed;
let b;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (x = 0; x < windowWidth; x = x + windowWidth / 10) {
    for (y = 25; y < windowHeight; y = y + windowHeight / 10) {
      rect(x, y, windowWidth, 1);
    }
  }
  for (y = 0; y < windowHeight; y = y + windowHeight / 10) {
    for (x = 25; x < windowWidth; x = x + windowWidth / 10) {
      rect(x, y, 1, windowHeight);
    }
  }
}
