
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObjet;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObjet=new Paper(40,75,30);//Falta el radio

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObjet.display();

}


function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObjet.body,paperObjet.body.position,{x:-1200,y:-750});


}



}

