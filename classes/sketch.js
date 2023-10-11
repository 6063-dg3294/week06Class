// let circles = [];
// let numCircles = 16;
let asteroidArray = [];
let maxAsteroid = 16;




class Asteroid{
  constructor(){
    this.x = 0
    this.y = random(30, height - 30);
    this.v = random(2,4);
    this.r = random(15,40)
  }
}


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
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < asteroidArray.length; i += 1) {
    let myAsteroid = asteroidArray[i];

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
