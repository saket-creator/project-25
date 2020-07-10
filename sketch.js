var paperObject,ground,dustbin1,dustbin2,dustbin3,launch,dustbinIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(400,680,800,20);

	 dustbin2 = new Dustbin(570,670,150,10);
	 dustbin1 = new Dustbin(500,620,10,90);
	 dustbin3 = new Dustbin(640,620,10,90);
	 paperObject = new Paper(85,600,25);
	 launch= new Launcher(paperObject.body,{x:100,y:100})
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ground.display();
  
  paperObject.display();
  launch.display();
  imageMode(CENTER);
    image(dustbinIMG,570,620,130,90);

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	   
	 }
   }
   function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launch.fly();
}

