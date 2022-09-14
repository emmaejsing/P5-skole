let song;

function setup() {
  createCanvas(400, 400);
  song = loadSound('trumme1.mp3');
  sang = loadSound('trumme2.mp3');
  musik = loadSound('trumme3.mp3');
}

function draw() {
  background(220);
  circle(50,50,80);
  circle(150,50,80);
  circle(100,150,80);
  if(mouseIsPressed == true){
    if(mouseX >= 10){
      if(mouseX <= 90){
        if(mouseY >= 10){
          if(mouseY <= 90){
            song.play();
          }
        }
      }
    }
    if(mouseX >= 110){
      if(mouseX <= 190){
        if(mouseY >= 10){
          if(mouseY <= 90){
            sang.play();
          } else{
            sang.stop();
          }
        }
      }
    }
    if(mouseX >= 60){
      if(mouseX <= 140){
        if(mouseY >= 110){
          if(mouseY <= 190){
            musik.play();
          } else{
            musik.stop();
          }
        }
      }
    }
  }
}
