var astronaut;
var astroShowerImg, astroExerciseImg, astroSleepImg, astroEatImg, astroClothesImg, astronautImg;

function preload(){
  astroShowerImg = loadImage("Screen Shot 2021-08-19 at 7.09.54 PM.png");
  astroExerciseImg = loadImage("Screen Shot 2021-08-19 at 7.11.26 PM.png");
  astroSleepImg = loadImage("Screen Shot 2021-08-19 at 7.11.43 PM.png");
  astroEatImg = loadImage("Screen Shot 2021-08-19 at 7.12.10 PM.png")
  astroClothesImg = loadImage("Screen Shot 2021-08-19 at 7.13.12 PM.png");
  astronautImg = loadImage("Screen Shot 2021-08-19 at 7.13.25 PM.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(400, 200, 800, 400);
  astronaut.addImage("astroPerson", astronautImg);
}

function draw() {
  background("black");  
  
  if(keyDown("up")){
    astronaut.addImage("showering", astroShowerImg);
    astronaut.changeImage("showering");
  }

  if(keyDown("down")){
    astronaut.addImage("exercising", astroExerciseImg);
    astronaut.changeImage("exercising");
  }

  if(keyDown("left")){
    astronaut.addImage("sleeping", astroSleepImg);
    astronaut.changeImage("sleeping");
  }
  if(keyDown("right")){
    astronaut.addImage("eating", astroEatImg);
    astronaut.changeImage("eating");
  }
  if(keyDown("c")){
    astronaut.addImage("clothing", astroClothesImg);
    astronaut.changeImage("clothing");
  }

  if(keyDown("r")){
    astronaut.changeImage("astroPerson");
  }

  drawSprites();
  
  textSize(10);
  fill("gray");
  text("Welcome to the Astronaut Simulator.", 20, 20);
  text("Press the down key to see the astronaut exercising.", 20, 50);
  text("Press the up key to see the astronaut showering.", 20, 80);
  text("Press the right key to see the astronaut eating.", 20, 110);
  text("Press the 'c' key to see the astronaut dressing.", 20, 140);
  text("Press the 'r' key to go back to the home page.", 20, 170);
}