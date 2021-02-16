var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var engine,world;
 
var particles = [];
var plinkos = [];
var particle;
var divisions=[];
var divisionHeight=300;
var count=0
var score =0;
var gameState="play";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("white");
  textSize(24)
 //text("Score : "+score,20,30);
 stroke("yellow");
 fill("black");
 text("SCORE: "+score,20,30);
 stroke("black")
 fill("black");
 text("500",20,550);
 text("500",100,550);
 text("500",180,550);
 text("500",260,550);
 text("100",340,550);
 text("100",420,550);
 text("100",500,550);
 text("200",580,550);
 text("200",660,550);
 text("200",740,550);
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null)
   {
      particle.display();
         
          if(particle.body.position.y>760)
          {
                if(particle.body.position.x<300)
                {
                     score=score+500;
                     particle=null;
                     if(count>=5) gameState="end"
                }
                
          }

          
    }

    if(particle!=null)
   {
      particle.display();
         
          if(particle.body.position.y>760)
          {
                if(particle.body.position.x<550)
                {
                     score=score+100;
                     particle=null;
                     if(count>=5) gameState="end"
                }
                
          }

          
    }
    if(particle!=null)
   {
      particle.display();
         
          if(particle.body.position.y>760)
          {
                if(particle.body.position.x<780)
                {
                     score=score+200;
                     particle=null;
                     if(count>=5) gameState="end"
                }
                
          }

          
    }

    if(gameState==="end")
    {
      fill("blue")
      textSize(38)
      text("GameOver",300,340);
    }
}

function mousePressed()
{
  if(gameState!=="end")
  {
    particle=new Particle(mouseX,10,10,10);
    count=count+1;
    console.log(count);
  }
}