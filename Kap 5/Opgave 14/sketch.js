let ligetal = [];
let uligetal = [];

function setup() {
  createCanvas(400, 400);
  line(200, 0, 200, 400);
  for (i = 0; i < 11; i = i + 2) {
    ligetal.push(i);
    text(i, random(200), random(400));
  }
  for (i = 1; i < 11; i = i + 2) {
    uligetal.push(i);
    text(i, random(200, 400), random(400));
  }
}
