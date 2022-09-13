let x = 100;
let y = 100;

function setup() {
  createCanvas(400, 400);
  fill(250,250,0);
}

function draw() {
  background(100);
  if(keyIsDown(LEFT_ARROW)){
    x-=5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x+=5;
  }
  if(keyIsDown(UP_ARROW)){
    y-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y+=5;
  }

  clear();
  circle(x,y,50);
}
