let x;
let y;
let speed;
let a;
let b;

let speed1;
let a1;
let x1;
let y1;

let speed2;
let a2;
let x2;
let y2;

let speed3;
let a3;
let x3;
let y3;

let speed4;
let a4;
let x4;
let y4;

let speed5;
let a5;
let x5;
let y5;

function setup() {
  createCanvas(400, 400);
  x = random(50, 350);
  y = 246;
  speed = 1;
  a = speed;
  b = 0;
  x1 = random(50, 350);
  y1 = 256;
  speed1 = 1;
  a1 = speed1;
  x2 = random(50, 350);
  y2 = 266;
  speed2 = 1;
  a2 = speed2;
  x3 = random(50, 350);
  y3 = 276;
  speed3 = 1;
  a3 = speed3;
  x4 = random(50, 350);
  y4 = 286;
  speed4 = 1;
  a4 = speed4;
  x5 = random(50, 350);
  y5 = 296;
  speed5 = 1;
  a5 = speed5;
}

function draw() {
  background(220);
  fill(255, 255, 0);
  if (mouseIsPressed == true) {
    if (mouseX >= 10) {
      if (mouseX <= 90) {
        if (mouseY >= 10) {
          if (mouseY <= 90) {
            fill(255, 0, 0);
          }
        }
      }
    }
  }
  if (mouseIsPressed == true) {
    if (mouseX >= 110) {
      if (mouseX <= 190) {
        if (mouseY >= 10) {
          if (mouseY <= 90) {
            fill(255, 0, 255);
          }
        }
      }
    }
  }
  if (mouseIsPressed == true) {
    if (mouseX >= 60) {
      if (mouseX <= 140) {
        if (mouseY >= 110) {
          if (mouseY <= 190) {
            fill(255, 0, 255);
          }
        }
      }
    }
  }
  circle(50, 50, 80);
  circle(150, 50, 80);
  circle(100, 150, 80);
  fill(255);
  rect(220, 40, 30, 125);
  rect(275, 40, 30, 125);
  rect(330, 40, 30, 125);
  rect(75, 225, 25, 100);
  rect(125, 225, 25, 100);
  rect(175, 225, 25, 100);
  rect(225, 225, 25, 100);
  rect(275, 225, 25, 100);
  fill(0);
  rect(250, 40, 25, 125);
  rect(305, 40, 25, 125);
  rect(50, 250, 300, 1);
  rect(50, 260, 300, 1);
  rect(50, 270, 300, 1);
  rect(50, 280, 300, 1);
  rect(50, 290, 300, 1);
  rect(50, 300, 300, 1);
  fill(255);
  rect(x, y, 8, 8);
  x += a;
  y += b;
  if (x <= 50) {
    a = speed;
  }
  if (x >= 350) {
    a = -speed;
  }
  rect(x1, y1, 8, 8);
  x1 += a1;
  y1 += b;
  if (x1 <= 50) {
    a1 = speed1;
  }
  if (x1 >= 350) {
    a1 = -speed1;
  }
  rect(x2, y2, 8, 8);
  x2 += a2;
  y2 += b;
  if (x2 <= 50) {
    a2 = speed2;
  }
  if (x2 >= 350) {
    a2 = -speed2;
  }
  rect(x3, y3, 8, 8);
  x3 += a3;
  y3 += b;
  if (x3 <= 50) {
    a3 = speed3;
  }
  if (x3 >= 350) {
    a3 = -speed3;
  }
  rect(x4, y4, 8, 8);
  x4 += a4;
  y4 += b;
  if (x4 <= 50) {
    a4 = speed4;
  }
  if (x4 >= 350) {
    a4 = -speed4;
  }
  rect(x5, y5, 8, 8);
  x5 += a5;
  y5 += b;
  if (x5 <= 50) {
    a5 = speed5;
  }
  if (x5 >= 350) {
    a5 = -speed5;
  }
}
