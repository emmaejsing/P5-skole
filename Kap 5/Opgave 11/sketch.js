function setup() {
  createCanvas(400, 400);
  for (x = 0; x < 400; x = x + 100) {
    for (y = 0; y < 400; y = y + 100) {
      fill(0);
      rect(x, y, 50, 50);
    }
  }
  for (x = 50; x < 400; x = x + 100) {
    for (y = 50; y < 400; y = y + 100) {
      fill(0);
      rect(x, y, 50, 50);
    }
  }
}
