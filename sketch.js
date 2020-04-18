var nrec;
var mrec;
var rec;
var yeet;

function setup() {
  createCanvas(800,400);
  nrec = createSprite(200, 200, 50, 50);
  mrec = createSprite(400,200,50,50);
  rec = createSprite(300,10,50,50);
  yeet = createSprite(300,350,50,50);
  rec.velocityY= 5;
  yeet.velocityY=-5;
  rec.shapeColor= "orange";
  yeet.shapeColor="aqua"
}

function draw() {
  background(0); 
  mrec.x=World.mouseX 
  mrec.y=World.mouseY
  console.log(mrec.x-nrec.x)
  if(mrec.x-nrec.x===mrec.width/2+nrec.width/2||nrec.x-mrec.x===mrec.width/2+nrec.width/2||mrec.y-nrec.y===mrec.height/2+nrec.height/2||nrec.y-mrec.y===mrec.height/2+nrec.height/2){
    nrec.shapeColor="red"
    mrec.shapeColor="blue"
  }
  else{
    nrec.shapeColor="green"
    mrec.shapeColor="pink"

  }
  if(rec.y-yeet.y===yeet.height/2+rec.height/2)
  {
    rec.velocityY= rec.velocityY*-1;
    yeet.velocityY=yeet.velocityY*-1;
  }

  
  drawSprites();
}