
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;


var rockIm,treeIm,mangoIm,boyIm;
var tree,mango,boy,rock,ground,chain;
var gameState = "onsling";
function preload()
{
	
	treeIm = loadImage("tree.png");
	mangoIm = loadImage("mango.png");
	boyIm = loadImage("boy.png");
	

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// ground = createSprite(600,680,1200,50);

	var bin1 = createSprite(200,200,10,100);

	ground = new Ground(600,680,1200,50);
	
	rock = new Rock(80,300,40);

	chain = new Chain(rock.body,{x:100,y:560})

	man1 = new Mango(450,350,30);

	/*var tree = createSprite(800,430,10,10);
	tree.addImage(treeIm);
	tree.scale = 0.4;*/

	tree = new Tree(800,430,40,200);

	boy = createSprite(150,620,10,10);
	boy.addImage(boyIm);
	boy.scale = 0.1;

	

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  tree.display();
  man1.display();
  rock.display();
  chain.display();
  drawSprites();
 

  if(rock.isTounching(man1)){
	man1.isStatic = true;
  }
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(rock.body,{x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       
    }
}




