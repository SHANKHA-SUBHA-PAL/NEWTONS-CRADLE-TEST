
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground,string1;


function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(150,300,30);
	bob2 = new Bob(210,300,30);
	bob3 = new Bob(270,300,30);
	bob4 = new Bob(330,300,30);
	bob5 = new Bob(390,300,30);
	roof = new Ground(270,50,320,60);
	string1 = new String(bob1.body,roof.body,bob1.radius*2,0);
	string2 = new String(roof.body,bob2.body,bob2.radius*2,0);
	string3 = new String(roof.body,bob3.body,bob3.radius*2,0);
	string4 = new String(roof.body,bob4.body,bob4.radius*2,0);
	string5 = new String(roof.body,bob5.body,bob5.radius*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display(); 
 
}



