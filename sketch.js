
var car,wall;
var speed,weigth;
var text_1=0;
function setup() {
  createCanvas(900,400);
   
  speed  = random(55,90)
  weigth = random(400,1500)

  car= createSprite(50,200,40,40);
  car.velocityX = speed;
  car.shapeColor="white";

  wall= createSprite(800,200,30,400);
  wall.shapeColor="pink";
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation=0.5 * weigth * speed * speed / 22509;
  
  if(deformation>180){
    text_1=1;
    car.shapeColor="red";
  }
  if(deformation<180 && deformation>100){
    text_1=2;
    car.shapeColor="yellow";
  }
  if(deformation<180){
    text_1=3;
    car.shapeColor=color(0,225,0);
  }
}
if(text_1===1){
  fill("red");
  stroke("red");
  textSize(35);
  text("Not Safe",100,200);
}
if(text_1===2){
  fill("yellow");
  stroke("yellow");
  textSize(35);
  text("Safe",100,200);
}
if(text_1===3){
  fill("green");
  stroke("green");
  textSize(35);
  text("Perfectly Safe",100,200);
}
  drawSprites();
}