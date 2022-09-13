let x;
let y;
let xspeed;
let yspeed;

function setup() {
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = 0
  yspeed = 5
}

function draw() {
  background(220);
  circle(x,y,50);
  x+=xspeed;
  y+=yspeed;
  if(y > 375){
    yspeed = yspeed*-1
  } else if(y < 25)
  yspeed = yspeed*-1
}
