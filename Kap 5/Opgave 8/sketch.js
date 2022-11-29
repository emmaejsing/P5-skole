let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  for (i = 0; i < 10; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    circle(x, y, 10);
    fill(random(255), random(255), random(255));
  }
}
