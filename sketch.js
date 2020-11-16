var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Food,Obstacle
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
monkey = createSprite(50,160,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1; 
  
ground = createSprite(400,350,900,5);
ground.velocityX = -4;
ground.x = ground.width /2;
console.log(ground.x);
  
Food = new Group();
Obstacle = new Group();
  
score = 0;
  

  
}


function draw()
{
background(255);
  
var survivalTime=0;
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime, 100,50);


stroke("black");
textSize(20);
fill("black");
text("Score: "+ score, 250,100);
  
if(gameState === PLAY)
{
  
ground.velocityX = -4
  
if (ground.x < 0)
{
ground.x = ground.width/2;
}
  
//jump when the space key is pressed
if(keyDown("space")&& monkey.y >= 100) 
{
monkey.velocityY = -12;
}
  
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
  

if(Food.isTouching(monkey))
{
Food.destroyEach();
score = score+1;
}
  
if(Obstacle.isTouching(monkey))
{
Obstacle.destroyEach();
score = score-1;
}

}
  

  


  


FoodGroup();
obstacleGroup();

  
drawSprites();
  
}

function FoodGroup() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -(4 + score/4);
    
     //assign lifetime to the variable
    banana.lifetime = -1;
    
    Food.add(banana);
    
  }
}
    
function obstacleGroup() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.y = Math.round(random(330,335));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -(6 + score/2);
    
     //assign lifetime to the variable
    obstacle.lifetime = -1;
    
    Obstacle.add(obstacle);
    
  }
}
    














