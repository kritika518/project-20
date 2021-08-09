function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png","images/gym22.png");
  eat=loadAnimation("images/eat.png");
  drink=loadAnimation("images/drink.png");
  move=loadAnimation("images/move.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  keyEvents:
  DOWN_ARROW=gymming
  LEFT_ARROW=bathing
  RIGHT_ARROW=eating
  UP_ARROW=brushing
  M_KEY=moving
}

function draw() {
  background(255,255,255);  
  drawSprites();
}