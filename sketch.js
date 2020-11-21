const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  ground = new Ground(600,height-10,1200,20)
  platform = new Ground(150, 305, 300, 170);
}
function draw() {
  background(255,255,255);
  Engine.update(engine);
  background(0);
  box1.display();
  box2.display();
  ground.display();
  platform.display();
  drawSprites();
}