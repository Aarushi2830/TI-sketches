function setup() {
  createCanvas(400, 400);
  let r = 50;

}

function draw() {
  r = mouseX;
  s = mouseY
  background(220);
  stroke(5);
  fill(10);
  for (let t = 0; t < 360; t=t+2) {
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0,15);
    let y = height / 2 + s* cos(d) + random(0,15);
    ellipse (x,random(0,10),random(0,10), y);
    rect(y,x, random(0,10), random(0,10))
  }
}