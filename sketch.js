var obstacle,character,character_running,character_collided,backgroundo,backgroundimage
var PLAY=1;
var END=0;
var gameState=PLAY;
var score;
function preload(){
    character_running = loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png");
    backgroundimage = loadImage("jungle.jpg");
}

function setup() {
    createCanvas(800,400);
    backgroundo = createSprite(800,400);
    backgroundo.addImage("backgroundo",backgroundimage);
    backgroundo.scale = 1.5;
    character = createSprite(80,250,10,10);
    character.addAnimation("character",character_running);
    
    score = 0;
}

function draw() {
 background(267);
 fill("red");
 textSize(25);
 text("Score: "+ score, 500,50);
 
 if(gameState === PLAY){
    if (backgroundo.x < 0){
      backgroundo.x = 400;
    }

    backgroundo.velocityX = 2;

}

drawSprites();
}
