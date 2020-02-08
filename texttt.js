let p1;

function setup() {
  createCanvas(400, 400);
  p1 = new particle();

}

function draw() {
  background(220);
  p1.display();
  p1.update();
}

class particle {
  constructor() {
    this.posx = random(0, width);
    this.posy = random(0, height);
    this.velx = random();
    this.vely = random();
    this.accx = 0.5;
    this.accy = 0.5;
  }

  update() {
    this.posx = this.posx + this.velx;
    this.posy += this.vely;

    if (this.posx > width || this.posx < 0) {
      this.velx = -this.velx;

    }
    if (this.posy < 0) {
      this.posy = height;
    }
    if (this.posy > height) {
      this.posy = 0;
    }
    this.velx+=this.accx;
    this.vely+=this.accy;
  }

  display() {
    textSize(32);
    text("bounce!",this.posx, this.posy);
  }
}