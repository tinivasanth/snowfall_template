const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine,world;

var bg_img;

function preload()
{
  
}


function setup() {
  createCanvas(800,400);

  engine= Engine.create()
  world= engine.world;
 imageMode(CENTER)
}

function draw() {
  background(51);
  drawSprites();
}


