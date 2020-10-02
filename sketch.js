

var car, wall;
var car, car2, car3, car4, wall, wall2, wall3, wall4;
function setup() {
  var canvas = createCanvas(800,800);
  speed = random(55,90);
    weight = random(400,1500);

    car = createSprite(50,200,50,50);
    car2 = createSprite(50,300,50,50);
    car3 = createSprite(50,400,50,50);
    car4 = createSprite(50,500,50,50);
    wall = createSprite(600,200,60,height/2);
    wall2 = createSprite(600,300,60,height/2);
    wall3 = createSprite(600,400,60,height/2);
    wall4 = createSprite(600,500,60,height/2);
    car.velocityX = speed;
    car2.velocityX = speed;
    car3.velocityX = speed;
    car4.velocityX = speed;

  
   
}

function draw() {
  background(0);
  //car.display();
  car2.display();
  car3.display();
  car4.display();
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();
  
 

  

  
 if(wall.x - car.x <(car.width + wall.width)/2){
   car.velocityX = 0;
   var deform = 0.5*weight*speed*speed/22509;
   if(deform>180){
     car.shapeColor = "blue";
   }
   if(deform<=180){
     car.shapeColor = "red";
   }
 }
 if(wall2.x - car2.x <(car2.width + wall2.width)/2){
  car2.velocityX = 0;
  var deform = 0.5*weight*speed*speed/22509;
  if(deform>180){
    car2.shapeColor = "blue";
  }
  if(deform<=180){
    car2.shapeColor = "red";
  }
}
if(wall3.x - car3.x <(car3.width + wall3.width)/2){
  car3.velocityX = 0;
  var deform = 0.5*weight*speed*speed/22509;
  if(deform>180){
    car3.shapeColor = "blue";
  }
  if(deform<=180){
    car3.shapeColor = "red";
  }
}
if(wall4 - car4.x <(car4.width + wall4.width)/2){
  car4.velocityX = 0;
  var deform = 0.5*weight*speed*speed/22509;
  if(deform>180){
    car4.shapeColor = "blue";
  }
  if(deform<=180){
    car4.shapeColor = "red";
  }
}







  drawSprites();
}