
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic=true
	}
	
	block1 = Bodies.circle(220,10,10,block1_options)
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(worls,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	fill("red")
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background("lightgreen");
  
  	drawSprites();
	
	Engine.update(engine);
	
	rectMode(CENTER)
	ellipseMode(CENTER)
}



