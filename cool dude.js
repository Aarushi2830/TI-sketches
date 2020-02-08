let img;
function preload() {
  img = loadImage ('cool dude.jfif');
}

function setup() {
  img.resize(0,400);
  createCanvas(img.width, img.height);
  //image(ing,0,0)
}

function draw(){
  //background (220);
  let X= random (0,width);
  let Y= random (0, height);
  let col = img.get(X,Y);
  noFill(col);
  stroke(col);
  ellipse(X,Y,10,10)
}