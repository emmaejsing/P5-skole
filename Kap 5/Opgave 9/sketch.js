let y = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  line(0, y, windowWidth, y);
  for (i = 0; i < windowWidth; i = i + 66) {
    rect(i, y - 10, 50, 20);
  }
}
