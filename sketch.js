var jungle , jungleImg , invisibleGround;
var monkey , Monkey_Running;
var stone , stoneImg ,  stoneGroup;
var banana , bananaImg;
var score = 0;

function preload() { 
Monkey_Running = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png");
  
   jungleImg = loadImage("jungle.jpg"); 
  
  bananaImg = loadImage("banana.png");
  stoneImg = loadImage("stone.png");
  
}

function setup() {
  createCanvas(800, 400);
  
  
  score = 0;
  
  jungle = createSprite(400,200,400,20);
  jungle.addImage("jungle",jungleImg);
  jungle.x = jungle.width /2;
  jungle.velocityX = -4;
  jungle.scale = 1.5;
  
  Monkey = createSprite(50,180,20,50);
  Monkey.addAnimation("running", Monkey_Running);
  Monkey.scale = 0.1;
  Monkey.y = 350;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  invisibleGround = createSprite(20,390,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background(220);
  
   
  if(keyDown("space")) {
    Monkey.velocityY = -10;
     
  }
  
  if(bananaGroup.isTouching(Monkey)) {
    score = score+1;
     bananaGroup.destroyEach();   
  }
  
 Monkey.velocityY = Monkey.velocityY + 0.7
  
  
  if(stoneGroup.isTouching(Monkey)){
    
    Monkey.scale = 0.08;
    
     }
  switch(score) {
      case 10: Monkey.scale = 0.12
              break;
      case 20: Monkey.scale = 0.14
              break;
      case 30: Monkey.scale = 0.16
              break;
      case 40: Monkey.scale = 0.18
              break;
      default: break;
  }
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  Monkey.collide(invisibleGround);
  
  spawnstones();
  spawnbananas();
  drawSprites(); 
  fill("dark green");
  textSize(20);
  text("Score: "+ score, 500,50);
  
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(700,790,40,10);
    banana.y = 290;
    banana.velocityX = -7;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    banana.addImage(bananaImg);
    
    banana.scale = 0.05;
    
    //adjust the depth
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnstones() {
  if(frameCount % 60 === 0) {
    var stone = createSprite(800,65,10,40);
    stone.velocityX = -4;
    stone.y = 370;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
   
   stone.addImage(stoneImg);
  
   stone.scale = 0.1;
    
    //assign scale and lifetime to the obstacle           
    stone.lifetime = 300;
    //add each obstacle to the group
   stoneGroup.add(stone);
  }
}

