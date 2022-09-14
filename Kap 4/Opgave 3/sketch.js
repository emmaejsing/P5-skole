let circleX
let circleY
let rectX
let rectY
let y
let x
let distance_circle
let distance_rect

function setup() {
  createCanvas(400, 400);
  fill(0,255,255);
  strokeWeight(1);
  circleX=random(1,400);
  circleY=random(1,400);
  rectX=random(1,400);
  rectY=random(1,400);
  x=random(1,400);
  y=random(1,400);
  distance_circle=sqrt((x-circleX)**2+(y-circleY)**2);
}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    circleX+=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    circleX-=5;
  }
  if(keyIsDown(UP_ARROW)){
    circleY-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    circleY+=5;
  }
  if(keyIsDown(68)){
    rectX+=5;
  }  
  if(keyIsDown(65)){
    rectX-=5;
  }
  if(keyIsDown(87)){
    rectY-=5;
  }
  if(keyIsDown(83)){
    rectY+=5;
  }
  circle(x,y,10);
  circle(circleX,circleY,25);
  rect(rectX,rectY,25,25);
}