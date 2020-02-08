//mouseX and mouseY
function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(10);
  fill(50);
  
   background(220);
  stroke(10);
  fill(50);
}

function draw() {
  ellipse (mouseX, random(5,10),random (5,10), mouseY)
  rect (mouseX, random(5,10),random (5,10), mouseY)
}