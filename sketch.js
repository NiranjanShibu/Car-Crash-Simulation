var car, wall;
var speed, weight;
var deformation;



function setup() {
  createCanvas(800,400);

  speed = random(55, 95);
  weight = random(400, 1500)

  car = createSprite(50, 200, 40, 40);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(700,200,70,height/2);
  wall.depth = car.depth;
  car.depth = car.depth+1;

  deformation = 0.5 * weight * speed * speed/22509;

}

function draw() {
  background(0,0,0); 

  if (car.x-wall.x<car.width/2+wall.width/2 && 
    wall.x-car.x<car.width/2+wall.width/2){

      car.velocityX = 0;

      if(deformation > 180){

        car.shapeColor = color(255,0,0);

      }

      if(deformation<180 && deformation>100){

          car.shapeColor = color(230,230,0);

      }

      if(deformation<100){

        car.shapeColor = color(0,255,0);

      }

    }  
 

  drawSprites();
}