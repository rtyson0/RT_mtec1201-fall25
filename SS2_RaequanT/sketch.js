//Raequan T.
////Simple lighting////
////Plug the cord into the wall to turn on the light////




function setup() {
  createCanvas(800, 800);
  let Drag=0
  let Drop=0

}

function draw() {
  background(200);

  strokeWeight(0)

  //wall
  fill(40)
  rect(700,0,100,800)

  //Plug Inerstion
  strokeWeight(10)
  stroke(255)
  line(mouseX-10,mouseY-20,mouseX+40,mouseY-20)
  line(mouseX+10,mouseY+30,mouseX+40,mouseY+30)
  
  //Plug Base
  stroke(0)
  strokeWeight(15)
  line(-15,400,mouseX-20,mouseY)
  rect(mouseX-20,mouseY-20,30,50)
 
  //Lightbulb
  strokeWeight(0)
  fill(220,100)
  ellipse(400,100,150)
  rect(350,100,100)
  strokeWeight(5)
  line(400,200,400,80)
  fill(240,255)
  strokeWeight(0)
  rect(340,180,120,50)

}


//
function mousePressed(){
  if(mouseX>700){
   fill(255,0,255,100)
   ellipse(400,100,500)
  }
}
