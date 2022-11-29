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

  greeting = createElement("h2", "write two numbers");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const tal1 = int(input1.value());
  const tal2 = int(input2.value());
  greeting.html(tal1 + tal2);
  input1.value("");
  input2.value("");
}
