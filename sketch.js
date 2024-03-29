const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron, stone, rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,200);
    hammer = new Hammer(10,100);
    stone = new Stone(700, 200, 100, 100);
    iron = new Iron(500, 200, 50, 50)
    rubber = new Rubber(300, 200, 25, 25)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
 
}