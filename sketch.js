const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;
var elastic1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine=Engine.create();
    world=engine.world;
    platform1=new Platform(600,500,200,20)
    polygon1=new Polygon(50,200,20);
    elastic1=new Elastic(polygon1.body,{x:200,y:400});
    block1=new Block(525,455,50,50);
    block2=new Block(575,455,50,50);
    block3=new Block(625,455,50,50);
    block4=new Block(675,455,50,50);
    block5=new Block(550,405,50,50);
    block6=new Block(600,405,50,50);
    block7=new Block(650,405,50,50);
    block8=new Block(575,355,50,50);
    block9=new Block(625,355,50,50);
    block10=new Block(600,305,50,50);
    block11=new Block(600,255,50,50);
    block12=new Block(600,205,50,50);
    block13=new Block(600,155,50,50);
    
}
function draw(){
    background(0)
    Engine.update(engine);
    platform1.display();
    polygon1.display();
    elastic1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    

}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    elastic1.fly();
}