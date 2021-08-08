const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTERR);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1 = new rope(ball1,roof,-80,0);
	rope2 = new rope(ball2,roof,-70,0);
	rope3 = new rope(ball3,roof,-60,0);
	rope4 = new rope(ball4,roof,-50,0);
	rope4 = new rope(ball5,roof,-40,0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse()
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	Matter.Body.applyForce(ball1, {x:0,y:0}, 0.5)
}