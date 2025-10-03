let bf;
let gf; 

function preload(){
  bf =
loadImage('bf-marios-madness.gif')

  gf =
loadImage('gf-fnf.gif')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(105,122,163);
  // YOUR CODE GOES HERE

  //Floor 1
  strokeWeight(0)
  fill(69,81,120)
  beginShape()
  vertex(0,480)
  vertex(100,400)
  vertex(170,400)
  vertex(210,370)
  vertex(800,370)
  vertex(800,600)
  vertex(0,600)
  endShape()
  
  //floor 2
  fill(87,99,136)
  beginShape()
  vertex(64,429)
  vertex(100,400)
  vertex(170,400)
  vertex(210,370)
  vertex(800,370)
  vertex(800,429)
  endShape(CLOSE)
  
  //floor3
  fill(54,63,93)
  beginShape()
  vertex(25,460)
  vertex(64,429)
  vertex(800,429)
  vertex(800,459)
  endShape(CLOSE)
  triangle(0,460,25,460,0,480)
  
  //wall details
fill(87,99,136)
  rect(0,0,25,460)
  fill(137,155,194)
  rect(100,0,70,400)
  rect(210,0,700,370)
  fill(109,127,167)
  quad(170,0,210,0,210,370,170,400)
  //wires
  strokeWeight(2)
  noFill(0)
  line(100,0,100,400)
  bezier(100,400,280,500,100,400,0,480)
  bezier(0,550,600,500,400,400,480,320)
  
  //TV
  strokeWeight(0)
  fill(57,57,65)
  rect(490,0,310,180)
  fill(0)
  rect(520,0,280,150)
  
  //Outlet
  fill(255)
  rect(480,280,50,40)
  
  
  //Picture frames
  fill(86,86,105)
  rect(240,10,100,65)
  rect(350,25,100,45)
  rect(300,90,100,65)
  
  //Stickman
  fill(0)
  ellipse(290,290,100)
  strokeWeight(45)
  //body
  line(290,290,240,440)
  //arm
  line(280,315,205,300)
  line(205,300,150,315)
  noFill()
  //another arm
  bezier(280,315,280,283,210,300,300,200)
  //leg infront
  line(240,440,300,500)
  line(300,500,310,560)
  //leg behind
  line(240,440,200,500)
  line(200,500,150,560)
  //eyes
  fill(255)
  strokeWeight(0)
  ellipse(285,290,40,50)
  ellipse(323,290,30,50)

  //squint
  fill(0)
  quad(260,250,310,250,333,270,260,270)
  triangle(260,310,335,310,320,325)
  
  //left arrow (left)
  strokeWeight(2)
  beginShape()
  vertex(40,80)
  vertex(80,40)
  endShape(CLOSE)

  //GF
  image(gf, 490, 100, 400, 400)
  
  //BF
  image(bf, 600, 350, 250, 250)

  //Bar
  strokeWeight(6)
  fill(255,0,0)
  rect(160,500,80,20)
  fill(0,255,0)
  rect(240,500,400,20)
  stroke(150,150,150)
  strokeWeight(3)

  //Bot Active
  textSize(20)
  text("BOTPLAY",350,480)
  
  //Stickman head
  fill(0)
  ellipse(210,510,80)
  stroke(0)
  fill(255)
  ellipse(199,510,30,40)
  ellipse(232,510,25,40)
  
  
  
  
  
  
  
  
  
  
  
  
  //DONT'T DELETE!
  textSize(15)
  strokeWeight(1)
  stroke(0)
  fill(0)
  text(mouseX + "," + mouseY, 20, 20)
}