var garden,gardenImage;
var tom,tomImage;
var TOM
var JERRY




function preload() {
    
//load the images here

gardenImage = loadImage("images/garden.png");
tomImage = loadAnimation("images/tomOne.png");
tom_Image = loadAnimation("images/tomFour.png");
jerryImage = loadAnimation("images/jerryOne.png");
jerry_Image = loadAnimation("images/jerryFour.png");



//loading animations

   tom_animation = loadAnimation("images/tomTwo.png","images/tomThree.png");
   jerry_animation = loadAnimation("images/jerryTwo.png","images/jerryThree.png");

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(100,200,20,20);
    garden.addImage("garden",gardenImage);
    garden.scale = 2;

    tom = createSprite(850,600,40,40);
    tom.addAnimation("cat",tomImage);
    tom.addAnimation("tom",tom_Image)
    tom.addAnimation("TOM",tom_animation);
   // tom.addAnimation("cat",tomImage);
    tom.scale = 0.2;

    jerry = createSprite(110,600,40,40);
    jerry.addAnimation("rat",jerryImage);
    jerry.addAnimation("mouse",jerry_Image);

    jerry.addAnimation("JERRY",jerry_animation);
  //  jerry.addAnimation("mouse",jerryImage);
    jerry.scale = 0.2;


    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(jerry.isTouching(tom)){

        tom.changeAnimation("tom",tom_Image);
        jerry.changeAnimation("mouse",jerry_Image);

        tom.velocityX = 0;

    }


    
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation("TOM",tom_animation)
    jerry.changeAnimation("JERRY",jerry_animation);

    }


}
