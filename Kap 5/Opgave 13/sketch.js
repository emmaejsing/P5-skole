function setup() {
  createCanvas(400, 400);
  let liste = ["Oscar", "Alma", "Dorthe", "Lars", "Charlotte"];
  for (i = 0; i < liste.length; i++) {
    text(liste[i], random(375), random(400));
  }
}
