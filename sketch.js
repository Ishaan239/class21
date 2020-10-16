var R1, R2;

function setup() {
  createCanvas(800,400);
  R1=createSprite(200, 200, 50, 50);
  R1.shapeColor="green";
  R1.velocityX=2;
  R2=createSprite(600, 200, 50, 50);
  R2.shapeColor="green";
  R2.velocityX=-2;
}

function draw() {
  background(0); 
  bounceOff(R1, R2); 
  drawSprites();
}

