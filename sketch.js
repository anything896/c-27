const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ball2,ball3,ball4,ball5;
var stick,chain,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

stick=createSprite(400,100,550,30);
ball=createSprite(400,500,70,70);
ball2=createSprite(450,500,70,70);
ball3=createSprite(500,500,70,70);
ball4=createSprite(350,500,70,70);
ball5=createSprite(300,500,70,70);
chain = new Chain(ball.body,stick.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  stick.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain.display();
  drawSprites();
 
}




