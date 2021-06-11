const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var breadboardImage,breadboard;
var posX,posY;


// A5 : (x,y) === (147,131)
// J5 : (x,y) === (149,310)
function preload(){
 breadboardImage = loadImage("b.jpg");
   
}
function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


  
   breadboard =createSprite(450,200,20,20);
   breadboard.addImage(breadboardImage);
   breadboard.scale=1.4;

 

}

function draw(){
    background(0);
   
    posX = mouseX;
    posY = mouseY;
 
    console.log("x : " + posX)
    console.log("y : " + posY)
       
    drawSprites();
}
