var canvas;
var backgroundImg;
var gameState = 0;
var score = 0;
var form;
var runner, runnerImg1;
var invisibleGround;
var ground;

function preload() {
//bgImg = loadImage("./images/jungle.png");
//runnerImg1 = loadImage("player/Idle(1).png");

getBackgroundImg();

}

function setup() {
  canvas = createCanvas(windowWidth + 300, windowHeight);

  runner = createSprite(width/2 - 630, height/2 + 170, 40, 40);
  //runner.addImage(runnerImg1);

  ground = createSprite(width/2 - 630, height/2 + 220, width/2, 20 )

  invisibleGround = createSprite(width/2 - 630, height/2 + 270, width/2, 20 );
  //invisibleGround.visibility = false;

  game = new Game();

  score = 0;

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  runner.collide(invisibleGround);
  
  //gravity
  //runner.y = runner.y + 0.8;


  if(gameState === 0){
    game.start();
    
  }

  if(gameState === 1){
    form.greeting.hide();
    form.input.hide();
    form.playButton.hide();

    //runner controls
    /* if(keyDown("UP_ARROW")){
      runner.velocityY = -4;
    }*/
  }




  drawSprites()

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
   
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <=18){
      bg = "images/jungle.png";
  }
  else{
      bg = "images/nightjungle-1.png";
  }

  backgroundImg = loadImage(bg);
  
}