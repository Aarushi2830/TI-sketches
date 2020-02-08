let p;
 
 function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(10)
  colorMode (HSB)
}

function draw() {
let a = random (10,60);
 let b = random (30,60);
 let c = random (50,60);
  fill (a,b,c);
 
ellipse (mouseX, mouseY,random(50,60), random (50, 60))
}