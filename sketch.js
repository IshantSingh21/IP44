function preload(){
bgImg = loadImage("bg.jpg")
obstacle1Img = loadImage("obstacle1.png")
obstacle2Img = loadImage("obstacle2.png")
coinImg = loadImage("coin.png")
}

function setup() {
 createCanvas(1000, 1200)
 bg = createSprite(600, 350, 1200,1200)
 bg.addImage(bgImg)
 bg.scale = 4


 bg.velocityX = -2

}

function draw() {

    background("red")
 drawSprites()
 if(bg.x<0){
 bg.x = width/2
 }
 createObstacles()
}

function createObstacles(){
if(frameCount% 150 === 0){
obstacle1 = createSprite(1000,random(450,650))
rand = Math.round(random(1,2))
switch(rand){
    case 1: obstacle1.addImage(obstacle1Img);
    break;
    case 2: obstacle1.addImage(obstacle2Img)
}
obstacle1.velocityX = -3
obstacle1.scale = 0.2

}
}