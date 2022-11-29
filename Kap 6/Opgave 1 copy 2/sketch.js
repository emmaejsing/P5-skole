let x1, x2, y1, y2, r1, r2;

function setup() {
  createCanvas(400, 400);
  r1 = random(400 / 2);
  r2 = random(400 / 2);
  x1 = random(r1, 400 - r1);
  x2 = random(r2, 400 - r2);
  y1 = random(r1, 400 - r1);
  y2 = random(r2, 400 - r2);
}

function draw() {
  circle(x1, y1, r1);
  circle(x2, y2, r2);
}

function circleCheck() {
  if (sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2) < r1 + r2) {
    print("true");
  } else print("false");
}
