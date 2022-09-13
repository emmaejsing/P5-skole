let x;
let y;
let xspeed;
let yspeed;

function setup() {
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1;
  yspeed = 0.5*xspeed;
}

function draw() {
  background(220);
  fill(255,0,255);
  circle(x,y,50);
  x+=xspeed;
  y+=yspeed;
  if(x < 0) {
    xspeed = xspeed*-1
    yspeed = yspeed*1
  } else if(x > 400) {
    xspeed = xspeed*-1
    yspeed = yspeed*1
  }
  if(y < 0) {
    xspeed = xspeed*1
    yspeed = yspeed*-1
  } else if(y > 400) {
    xspeed = xspeed*1
    yspeed = yspeed*-1
  }
  if(mouseIsPressed == true) {
    
  }
}
