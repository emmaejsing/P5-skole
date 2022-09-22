let x;
let y;
let a;
let b;
let d;
let speed;
let catX;
let catY;
let catA;
let catB;
let catSpeedX;
let catSpeedY;
let distance;
let CatX;
let CatY;
let CatA;
let CatB;
let CatSpeedX;
let CatSpeedY;
let Distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  d = 20;
  speed = 5;
  a = speed;
  b = 0;
  catX = random(0, windowWidth);
  catY = random(0, windowHeight);
  catSpeedX = random(-5, 5);
  catSpeedY = random(-5, 5);
  catA = catSpeedX;
  catB = catSpeedY;
  CatX = random(0, windowWidth);
  CatY = random(0, windowHeight);
  CatSpeedX = random(-5, 5);
  CatSpeedY = random(-5, 5);
  CatA = CatSpeedX;
  CatB = CatSpeedY;
}

function draw() {
  background(220);
  circle(x, y, d);
  x += a;
  y += b;
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (x + d / 2 >= windowWidth) {
    a = -speed;
    b = 0;
  }
  if (y - d / 2 <= 0) {
    b = speed;
    a = 0;
  }
  if (y + d / 2 >= windowHeight) {
    b = -speed;
    a = 0;
  }
  rect(catX, catY, d);
  catX += catA;
  catY += catB;
  if (catX - d / 2 <= 0) {
    catA = random(1, 5);
    catB = random(1, 5);
    catA = catA * 2;
    catB = catB * 2;
  }
  if (catX + d / 2 >= windowWidth) {
    catA = -random(1, 5);
    catB = -random(1, 5);
  }
  if (catY - d / 2 <= 0) {
    catB = random(1, 5);
    catA = -random(1, 5);
  }
  if (catY + d / 2 >= windowHeight) {
    catB = -random(1, 5);
    catA = random(1, 5);
  }
  distance = sqrt((x - catX) ** 2 + (y - catY) ** 2);
  if (distance <= d) {
    x = random(0, windowWidth);
    y = random(0, windowHeight);
  }
  rect(CatX, CatY, d);
  CatX += CatA;
  CatY += CatB;
  if (CatX - d / 2 <= 0) {
    CatA = random(1, 5);
    CatB = random(1, 5);
    CatA = CatA * 2;
    CatB = CatB * 2;
  }
  if (CatX + d / 2 >= windowWidth) {
    CatA = -random(1, 5);
    CatB = -random(1, 5);
  }
  if (CatY - d / 2 <= 0) {
    CatB = random(1, 5);
    CatA = -random(1, 5);
  }
  if (CatY + d / 2 >= windowHeight) {
    CatB = -random(1, 5);
    CatA = random(1, 5);
  }
  Distance = sqrt((x - CatX) ** 2 + (y - CatY) ** 2);
  if (Distance <= d) {
    x = random(0, windowWidth);
    y = random(0, windowHeight);
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    a = 0;
    b = speed;
  }
  if (keyCode == UP_ARROW) {
    a = 0;
    b = -speed;
  }
  if (keyCode == LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode == RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}
