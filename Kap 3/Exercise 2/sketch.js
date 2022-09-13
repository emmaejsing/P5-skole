function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseIsPressed == true) {
    if(mouseButton == LEFT) {
      circle(mouseX,mouseY,100)
    }
    else if(mouseButton == RIGHT){
      rect(mouseX,mouseY,100,75)
    }
  }
}
