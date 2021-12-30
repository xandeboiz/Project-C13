var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  spawnapp();
  spawnor();
  spawnredl();

  drawSprites();
  
}

function spawnapp(){
  if(frameCount % 80 == 0){
    apple = createSprite(random(50,350),0,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 3;
    apple.scale = 0.07;
    apple.lifetime = 150;
  }
}

function spawnor(){
  if(frameCount % 60 == 0){
    orange = createSprite(random(50,350),0,10,10);
    orange.addImage(orangeImg);
    orange.velocityY = 3;
    orange.scale = 0.07;
    orange.lifetime = 150;
  }
}

function spawnredl(){
  if(frameCount % 100 == 0){
    red = createSprite(random(50,350),0,10,10);
    red.addImage(redImg);
    red.velocityY = 3;
    red.scale = 0.07;
    red.lifetime = 150;
  }
}