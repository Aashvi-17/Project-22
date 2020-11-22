	var helicopterIMG, helicopterSprite, packageSprite,packageIMG,floodrelief;
	var packageBody,ground,floodimg,human,score;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		floodimg=loadImage("flood.PNG")
		backgroundimg=loadImage("flood background.gif")
		helicopterIMG=loadImage("helicopter.png")
		packageIMG=loadImage("package.png")
		humanimg=loadImage("human.PNG")
	}

	function setup() {
		createCanvas(800, 700);
		rectMode(CENTER);
		
		backgroundSprite=createSprite(400,350,1000,4000);
		backgroundSprite.addImage(backgroundimg);
		backgroundSprite.scale=1.9;


		packageSprite=createSprite(550, 110, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2
		

		helicopterSprite=createSprite(550, 100, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6
		people()

		groundSprite=createSprite(width/2, 400, width,10);
		groundSprite.shapeColor=color(255)
		groundSprite.visible=false

		floodrelief=createSprite(100,60,30,30);
		floodrelief.addImage(floodimg);
		floodrelief.scale=0.8;	


		engine = Engine.create();
		world = engine.world;

		packageBody = Bodies.circle(helicopterSprite.x , 140 , 5 , {restitution:0.6, isStatic:true});
		World.add(world, packageBody);
		

		
		ground = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
		World.add(world, ground);


		Engine.run(engine);
	
	}


	function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y

	

	
	if( packageSprite.y<141){
		packageSprite.x = helicopterSprite.x 

	}
	
	if (keyDown("left")) {
		helicopterSprite.x = helicopterSprite.x - 10;
		packageSprite.x = packageSprite.x - 10;
	}


	if (keyDown("right")) {
		helicopterSprite.x = helicopterSprite.x + 10;
		packageSprite.x = packageSprite.x + 10;
		packageBody.x=packageBody.x - 10;
		
	}

	people()

	keyPressed()
	drawSprites();
	
	}

	function keyPressed() {	
	if (keyCode === DOWN_ARROW) {
		packageBody.x = helicopterSprite.x;	
		packageBody = Bodies.circle(helicopterSprite.x , 140 , 5, {restitution:0.6, isStatic:false});	
	    World.add(world,packageBody);
	    Matter.Body.setStatic(packageBody,false);
		

	}
	}
	function people(){
		
		if (frameCount % 80 === 0) {
			var human = createSprite(0,300, 20, 50);
				human.addImage(humanimg);
				human.scale = 0.2;
				human.x = Math.round(random(40, 40))
				human.y = Math.round(random(380, 400))
				human.velocityX = 7;
				
		
			}
			
		}
		
			
