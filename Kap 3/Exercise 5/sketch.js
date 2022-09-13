function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(keyCode == 70) {
   rect(mouseX,mouseY,100,100);
  }
  else if(keyCode == 67) {
    circle(mouseX,mouseY,100);
  }
  else if(keyCode == 69) {
    ellipse(mouseX,mouseY,100,200);
  }
}
