//Create variables here
var dog, happyDog, dogImg, happyDogImg;
var database, foodS, foodStock;

function preload()
{
  dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog.addImage(dogImg);
  dog.scale=0.5;
}


function draw() {  
  background(rgb(46,139,87));
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
    dog.scale=0.5;
  }
  
  drawSprites();

  textSize(15);
  fill("yellow");
  stroke("yellow");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",20,470);
  //add styles here

}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food:x
  })
}

