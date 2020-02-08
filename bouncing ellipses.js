let p;

function setup() {
  createCanvas(400, 400);
  p= 0;
  step= +4
}

function draw() {
  background(220, 220, 220);
  let w= 100
     let h= 100

fill (10,10,50,50);
  stroke(40);
  ellipse(p, width/2-w/2, p, w, h);
  
  fill (10, 10, 30, 30);
  stroke (100);
  ellipse (p,height/2-h/0.5, p, w, h);

  fill (10,10,30,30);
  stroke(40);
  ellipse(p,height/2-h/2, w, h);
  
  fill (10, 10, 50, 50);
  stroke (100);
  ellipse (p,width/2-w/0.5, w, h);

p= p+ step;
  if (p> (height - h) || p<0)
  step= -step
}