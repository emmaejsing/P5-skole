function setup() {
  createCanvas(400, 400);
  background(255, 0, 255);
  translate(200, 200);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 40, 30, 200);
    rotate(PI / 5);
  }
}
