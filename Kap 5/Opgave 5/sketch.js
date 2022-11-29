i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 10; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let a = random(100);
    let b = random(100);
    ellipse(x, y, a, b);
  }

  while (i < 10) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let a = random(100);
    let b = random(100);
    ellipse(x, y, a, b);
    i = i + 1;
  }
}
