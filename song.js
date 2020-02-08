let song;
let a;
let s;

function preload () {
  soundFormats ("mp3")
  song= loadSound ("Tones and I - Dance Monkey.mp3")
  
}
function setup (){
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
}

function mouseClicked(){
  song.jump();
}

function keyPressed(){
  if (keyCode == "a"){
    song.play();  
  }
  
  if (keyCode =="s"){
    song.stop()
  }
  
  if (keyCode =="r"){
    song.reverseBuffer();
    song.play();
}
}

function mouseClicked(){
  song.play();
}p.play();
}