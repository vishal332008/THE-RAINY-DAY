const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rain=[];
var boy;

function preload(){
    boy = loadImage("man1.jpeg");
}

function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    
   for(i = 0;i < 250;i=i+1){
      rain.push(new Drops(random(10,590),random(-100,450)));
   }

   var options = {
    isStatic:true,
}
 this.body = Bodies.circle(230, 575, 125, options);
 World.add(world, this.body);
}

function draw(){
    background("black");
    Engine.update(engine);

    var boy1 = createSprite(300,600,5,5);
    boy1.addImage(boy);
    boy1.scale = 0.4;

    drawSprites();

    for(i=0;i<rain.length;i++){
        rain[i].display();
      }
}   
