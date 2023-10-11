// let circles = [];
// let numCircles = 16;
let asteroidArray = [];
let maxAsteroid = 16;




class Asteroid{
  constructor(){
    this.x = 0
    this.y = random(30, height - 30);
    this.v = random(2,4);
    this.r = random(15,40);
  }
  update() {

    this.x += this.v;
  
    // if reset is needed: pick random diameter and reset x
    if (this.x > width + this.r){
      this.r = random(15,40);
      this.x = 0 - this.r;
  
    }
      
  }
}

// _color is a variable
class Spaceship {
  constructor(_color){
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = random(1,2);
    this.vy = random(1, 2);
    this.color = _color;
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;

    if (this.x > width){
      this.x -= width;
    }
    if (this.y > height){
      this.y -= height;
    }
  }


}



function draw(){
  background("lightblue")
  noStroke();
  fill(this.color)
  rect(this.x, this.y, 50, 15)
}


let spaceship0;
let spaceship1;



function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < maxAsteroid; i++) {
    let myAsteroid = new Asteroid();
    asteroidArray.push(myAsteroid)

    // let myObject = {
    //   x: 0,
    //   y: random(30, height - 30),
    //   v: random(2, 4),
    //   r: random(15, 40),
    // };
    asteroidArray.push(myAsteroid);
  }
  spaceship0 = new Spaceship("steel")
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < asteroidArray.length; i += 1) {
    let myAsteroid = asteroidArray[i];
    myAsteroid.update();

    // draw circles
    ellipse(myAsteroid.x, myAsteroid.y, 2 * myAsteroid.r, 2 * myAsteroid.r);
    myAsteroid.x += myAsteroid.v;

    // if reset is needed: pick random diameter and reset x
    if (myAsteroid.x > width + myAsteroid.r) {
      myAsteroid.r = random(15, 40);
      myAsteroid.x = 0 - myAsteroid.r;
    }
  }
}
