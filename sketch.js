var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var orangeLeaf, orangeLeafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var s = Math.round(random(1,3));
  if(frameCount%80 == 0) {
    if(s == 1) {
      createApple();
    }
      else if(s == 2) {
        createorangeLeaf();

      }
     else{
      createLeaves();

     } 

    }

  }



function createApple() {

  apple = createSprite(random(50,350),40,10,10);
  apple.velocityY = 3;
  apple.addImage(appleImg);
  apple.scale = 0.07;



}

function createLeaves() {
  leaf = createSprite(random(20,350),40,10,10);
  leaf.velocityY = 3;
  leaf.addImage(leafImg);
  leaf.scale = 0.07;

}
function createorangeLeaf() {

  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.velocityY = 3;
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.07;



}