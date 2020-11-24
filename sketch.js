
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ball1;
var side1;
var side2;
var side3;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(0,660,1600,20);
	ball1=new Ball(100,640,20);
	side1=new Dustbin(640,640,200,20);
	side2=new Dustbin(550,600,20,100);
	side3=new Dustbin(750,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  keyPressed();
  ground1.display();
  ball1.display();
  side1.display();
  side2.display();
  side3.display();
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball1Object.body,ball1Object.body.position,{X:85,Y:-85})
  }
}


