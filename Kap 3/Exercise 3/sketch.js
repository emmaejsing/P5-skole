function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
}

function draw() {
  background(220);
  line(mouseX,mouseY,pmouseX,pmouseY);
}
