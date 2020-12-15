
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;

var textText = "";
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5; 
var diameter, scientist, scientistImg;
var black = "black", ellapsedTime = 0;
var blanket, mousex = 150;
var mousey = 250;

function preload()
{
	scientistImg = loadImage("Scientist.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	canvas = createCanvas(windowWidth / 2, windowHeight/1.5);
	let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = Matter.MouseConstraint.create(engine, options)
	World.add(world, mConstraint)
	
	diameter = 40

	//Create the Bodies Here.

	bob1 = new pendulum((width/2)-diameter*2, height/4+100, black);
	bob2 = new pendulum((width/2)-diameter*1, bob1.y, black);
	bob3 = new pendulum((width/2), bob1.y, black);
	bob4 = new pendulum((width/2)-diameter*-1, bob1.y, black);
	bob5 = new pendulum((width/2)-diameter*-2, bob1.y, black);

	rope1 = new sling(bob1.body, {x: bob1.body.position.x, y: 10})
	rope2 = new sling(bob2.body, {x: bob2.body.position.x, y: 10})
	rope3 = new sling(bob3.body, {x: bob3.body.position.x, y: 10})
	rope4 = new sling(bob4.body, {x: bob4.body.position.x, y: 10})
	rope5 = new sling(bob5.body, {x: bob5.body.position.x, y: 10})
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  drawSprites();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  scientist = image(scientistImg, mouseX, mouseY, 120, 160);
	ellapsedTime = Math.round(frameCount/frameRate());
	console.log(ellapsedTime)
	if (mouseX > width - 30 || mouseX < 30 || mouseY > height - 30 || mouseY < 30)
	{
		stroke("red")
		strokeWeight(0.5)
		text('HEY, DONT TRY TO PUSH ME OUT OF THE FRAME', mouseX - 30, mouseY - 20);
	}

}



function mouseDragged()
{
	Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
}