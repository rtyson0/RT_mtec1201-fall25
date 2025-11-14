//Raequan T.
////Midnight Studies////
////Plug the cord into the wall to turn on the light,////
////hidden text may show up on the paper!          ////



//This allows music and sounds to work//
let vol
let amp
let fft
let freqs
////////////////////////////////////////






let star
let ambience
let click


function preload(){
  soundFormats('mp3','ogg')
  


  ambience = loadSound("Refreshing Elevator music.mp3")
  click = loadSound("Mouse Click Sound Effect.mp3")




  star = loadImage("Starbucks-Logo.wine.png")
}

function setup() {
  createCanvas(800, 800);

  noCursor()
  
  frameRate(60)
  

  // Plays the music and sound effects
  if (ambience.play() == false){
    ambience.play()
  }

  

}

function draw() {
  background(20);



  //Credit to https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ for this part////
   var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  ///////////////////////////////////////////////////////////////////////////////








  
  strokeWeight(0)

  //Desk
  fill(140,40,40)
 rect(0,500,800)

  //Wall
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

  //Coffee Cup
  beginShape();
  vertex(10,375)
  vertex(0,400)
  vertex(20,580)
  vertex(130,580)
  vertex(150,400)
  vertex(140,375)
  endShape(CLOSE)
  image(star, -50, 400, 250, 200)


  //Lamp Wire
  stroke(0)
  strokeWeight(15)
  fill(0,0)
  bezier(-15,700,100,600,300,600,400,600)
  
  //Paper
  strokeWeight(0)
  fill(230)
  quad(300,700,200,800,500,800,600,700)


  //Lightbulb base
  fill(240,255)
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
  ellipse(400,650,300,100)
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
   quad(250,200,200,700,600,700,550,200)

   bezier(200,700,200,900,600,900,600,700)



  }

  if (mouseX > 700){
    fill(70,20,200, 100)
    textStyle(BOLDITALIC)
    text('Still pretty unfinished, but I managed to',300,750)
    text('finally get sound to work',290,770)
  }


  //Lamp Shade
  fill(255)
  quad(300,0,250,200,550,200,500,0)



  //Currently tweaking this

  

  

}





//Going to add some key pressed functions//
//so you can actually write on the paper!//

