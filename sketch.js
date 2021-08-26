var astronaut,ufo,astronautbath,astronautgym,astronautdrink,astronauteat,astronautsleep,astronautmove,
astronautbrush;

function preload(){

ufo = loadImage("iss.png");
astronautmove = loadAnimation("move.png","move1.png");
astronautbath = loadAnimation("bath1.png","bath2.png");
astronautgym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
astronautdrink = loadAnimation("drink1.png","drink2.png");
astronauteat = loadAnimation("eat1.png","eat2.png")
astronautsleep = loadAnimation("sleep.png");
astronautbrush = loadAnimation("brush.png");
}

  function setup(){
createCanvas(1100,600);

astronaut = createSprite(500,400,50,50)
astronaut.addAnimation("sleep",astronautsleep);
astronaut.scale = 0.1;

}

  function draw(){
background(ufo)

if(keyDown(UP_ARROW)){
 astronaut.addAnimation("brush", astronautbrush)
astronaut.changeAnimation("brush")
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;

}

if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("eat", astronauteat)
 astronaut.changeAnimation("eat")
 astronaut.y = 350;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
 
 }

 if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("bath", astronautbath)
 astronaut.changeAnimation("bath")
 astronaut.y = 350;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
 
 }

 if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gym", astronautgym)
 astronaut.changeAnimation("gym")
 astronaut.y = 350;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
 
 }

 if(keyDown("m")){
  astronaut.addAnimation("move", astronautmove)
 astronaut.changeAnimation("move")
 astronaut.y = 350;
 astronaut.velocityX = 1;
 astronaut.velocityY = 1;
 
 }
 
drawSprites();

  }
