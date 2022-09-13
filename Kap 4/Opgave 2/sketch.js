function setup() { 
  createCanvas(400, 400); 
  strokeWeight(10); 
  } 
  function draw() { 
   background(204); 
   stroke(50); 
   if (keyCode === 65){
    line(200,50,50,350); 
    line(200,50,350,350);
    line(125,200,275,200);
   } else if (keyCode === 86) {
    line(50,50,200,350);
    line(350,50,200,350);
   }
  }