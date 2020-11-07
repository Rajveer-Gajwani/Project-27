
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,200);
	bob2 = new Bob(300,200);
  bob3 = new Bob(400,200);
  bob4 = new Bob(500,200);
  bob5 = new Bob(600,200);
	ground1 = new Stand(400,200,600,20);
chain = new Chain(bob1.body, {x:200, y: 200});
chain1 = new Chain(bob2.body,{x:300,y:200});
chain2 = new Chain(bob3.body,{x:400,y:200});
chain3 = new Chain(bob4.body,{x:500,y:200});
chain4 = new Chain(bob5.body,{x:600,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(360);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x :mouseX, y : mouseY});
}

function mouseReleased(){
    Matter.Body.setPosition(bob1.body,{x :bob1.body.position.x, y : bob1.body.position.y});
}

