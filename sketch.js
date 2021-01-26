const World= Matter.World
const Bodies=Matter.Bodies
const Engine= Matter.Engine 
const Constraint= Matter.Constraint
var engine,world
var score=0;

function preload () {
    polygon_img=loadImage("polygon.png")
}

function setup(){
    engine=Engine.create();
    world=engine.world
     
    createCanvas (2000,800)


polygon= Bodies.circle(50,200,20);
World.add(world,polygon);
ground = new Ground(300, 300, 600, 20)

    block1 = new Block(300,275,30,40); 
    console.log(block1);
     block2 = new Block(330,275,30,40); 
    block3 = new Block(360,275,30,40);
     block4 = new Block(390,275,30,40); 
     block5 = new Block(420,275,30,40); 
     block6 = new Block(450,275,30,40); 
     block7 = new Block(480,275,30,40);

block8= new Block(330,235,30,40);
block9= new Block(360,235,30,40);
block10= new Block(390,235,30,40);
block11= new Block(420,235,30,40);
block12= new Block(450,235,30,40);
block13= new Block(360,195,30,40);
block14= new Block(390,195,30,40);
block15= new Block(420,195,30,40);
block16= new Block(390,155,30,40);
slingShot= new SlingShot(this.polygon, {x:100,y:200})
}
function draw(){
    background("lightblue")
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
Engine.update(engine);

    

block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();

block4.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
console.log("hello")
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
block16.display();
block16.score();
slingShot.display();
block1.score();
ground.display();
block1.score();
textSize(30)
    text("score"+score,500,50)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y:mouseY})
}

