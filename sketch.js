var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(300,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  
  var select_sprites=Math.round(random(1,3));
  if(frameCount%80 == 0){
if (select_sprites == 1)
{ createApples();} }  
   drawSprites();
   
  
  
 var select_sprites = Math.round(random(1,3));
 if(frameCount % 100 == 0) {
   if(select_sprites == 1)
   {createLeaves();}}
  drawSprites();

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 120 == 0) {
    if(select_sprites == 1)
    {createOrange();}}
   drawSprites();




}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createLeaves() {
leaves = createSprite(random(50, 350),40, 10, 10);
leaves.addImage(orangeImg);
leaves.scale=0.08;
leaves.velocityY = 3;
leaves.lifetime = 150;
}

function createOrange() {
  orange = createSprite(random(50, 350),40, 10, 10);
  orange.addImage(redImg);
  orange.scale=0.06;
  orange.velocityY = 3;
  orange.lifetime = 150;
  }
