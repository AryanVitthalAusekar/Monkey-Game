var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  var survivalTime = 0;
  
}


function draw() {
  background(300);
  
  ground.x = ground.width/2;
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 310)  {
    monkey.velocityY = -12;
  }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  Food();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100 , 50);
  
  
  
  drawSprites();
}

function Food() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,190,40,10);
    banana.y = Math.round(random(190,210));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 140;

    FoodGroup.add(banana);
  }
}

function obstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,40,10);
    obstacle.y = Math.round(random(329,330));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 140;

    obstacleGroup.add(obstacle);
  }
}


