const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  var engine, world, object, ground;
  
  function setup(){ 
      createCanvas (400,400);
   engine = Engine.create();
   world = engine.world;

    var ball_option = {restitution: 0.7}
   object = Bodies.circle(200,100,30, ball_option);
   World.add(world,object)

   console.log(object)

   var option = {isStatic : true}
   ground = Bodies.rectangle(200, 380, 400, 10, option);
   World.add(world, ground);
  
   console.log(ground)
  }
         
 function draw() {
   background("lightgreen"); 
     Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,30); 
   
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 10);
  
  
  
  }

 