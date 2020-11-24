var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redBox1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//redBox1 = new RedBox(200,385,200,20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	 boxPosition = width/2 - 100;
	 boxY = 610;
	 
	 box1s = createSprite(boxPosition, boxY, 20,100);
	 box1s.shapeColor = "red";
	 box2s = createSprite(500, boxY, 20, 100);
	 box2s.shapeColor = "red";
	 box3s = createSprite(width/2, 650, 200, 20);
	 box3s.shapeColor = "red";

	 box1 = Bodies.rectangle(boxPosition+20, boxY, 20, 100, {isStatic:true} );
	 World.add(world, box1);

	 box2 = Bodies.rectangle(500, boxY, 20, 100, {isStatic:true});
	 World.add(world, box2);

	 box3 = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true});
	 World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //redBox1.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



