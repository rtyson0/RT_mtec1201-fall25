//Raequan T.
////Simple lighting////
////Plug the cord into the wall to turn on the light,////
////as a train passes by in the background.          ////



function setup() {
  createCanvas(800, 800);
  let Drag=0
  let Drop=0

}

function draw() {
  background(70,20,200);

  strokeWeight(0)

  //wall
  fill(40)
  rect(700,0,100,800)

  //Back perspective of Wall Socket
  fill(0)
  rect(700,300,100,200)
  fill(220)
  rect(700,300,20,200)
  rect(720,300,30,20)



  //Plug Inerstion
  strokeWeight(10)
  stroke(255)
  line(mouseX-10,mouseY-20,mouseX+40,mouseY-20)
  line(mouseX+10,mouseY+30,mouseX+40,mouseY+30)
  
  //Plug Base
  stroke(0)
  fill(100)
  strokeWeight(15)
  fill(0,0)
  bezier(-15,700,100,600,300,600,400,600)
  bezier(-15,750,100,900,400,700,mouseX-20,mouseY)
  
  fill(100,255)
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
function keyPressed(){
  if(key === 'm'){
  
  if(mouseX>700){
   fill(255,255,0,100)
  
   ellipse(400,100,500)
   
  }
}
}
