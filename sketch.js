//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(120, 200, 10, 10);
  dog.addImage("Dog.png");
}


function draw() { 
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("images/happydog.png");

  }

    //add styles here
    textSize(30);
    fill("yellow");
  Stroke('10');

  drawSprites();
}

  function writePosition(Food, ){
foodStock = database.ref('Food');
foodStock.on("20", redStock)

  }

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
database.ref('/').update({
  Food:x
})
  }






