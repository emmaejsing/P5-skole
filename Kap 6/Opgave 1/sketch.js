let input1, input2, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  input1 = createInput();
  input1.position(20, 65);

  input2 = createInput();
  input2.position(input1.x + input1.width, input1.y);

  button = createButton("submit");
  button.position(input2.x + input2.width, 65);
  button.mousePressed(greet);

  greeting = createElement("h2", "what is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name1 = input1.value();
  const name2 = input2.value();
  greeting.html("hello " + name1 + " " + name2);
  input1.value("");
  input2.value("");
}
