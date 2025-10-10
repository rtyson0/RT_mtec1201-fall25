//Raequan T.
////Simple lighting////
////Plug the cord into the wall to turn on the light,////
////as a train passes by in the background.          ////



function setup() {
  createCanvas(800, 800);
  let DragX=0
  let DragY=0
  let DropX=0
  let DropY=0

}

function draw() {
  background(70,20,200);

  strokeWeight(0)

  //wall
  fill(40)
  rect(700,0,100,800)

  //Wall Socket
  fill(0)
  rect(700,300,50,200)
  fill(220)
  rect(700,300,20,200)
  rect(720,300,30,20)
  rect(720,385,30,20)
  rect(720,480,30,20)
  rect(740,300,20,200)
 

  //Lamp Wire
  stroke(0)
  strokeWeight(15)
  fill(0,0)
  bezier(-15,700,100,600,300,600,400,600)

  //Lightbulb base
  fill(240,255)
  strokeWeight(0)
  rect(340,180,120,50)

  //lamp

  fill(255,0,190)
  beginShape();
  vertex(340,230)
  vertex(300,300)
  vertex(340,650)
  vertex(460,650)
  vertex(500,300)
  endShape(CLOSE);

  fill(230,0,130)
  triangle(340,230,460,230,500,300)

if (mouseX < 700){
  //Plug connectors
  strokeWeight(10)
  stroke(255)
  line(mouseX-10,mouseY-20,mouseX+40,mouseY-20)
  line(mouseX+10,mouseY+30,mouseX+40,mouseY+30)
  
  //Plug Base
  stroke(0)
  strokeWeight(15)
  fill(0,0)
  bezier(-15,750,100,900,400,700,mouseX-20,mouseY)
  fill(100,255)
  rect(mouseX-20,mouseY-20,30,50)
} else {
  //Plug Base
  stroke(0)
  strokeWeight(15)
  fill(0,0)
  bezier(-15,750,100,900,400,700,713,345)
  fill(100,255)
  rect(713,327,30,50)
}
  
  strokeWeight(0)

  //Lighting
  if(mouseX>700){
   fill(255,0,190)
   strokeWeight(0)
   triangle(340,230,460,230,500,300)
   fill(255,255,0,100)
   ellipse(400,100,500)
  }

  //Lamp Shade
  fill(255)
  quad(300,0,250,200,550,200,500,0)
}


//
function keyPressed(){
  if(key === 'm'){
  
  
   
  }
}

