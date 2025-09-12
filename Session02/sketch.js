//Comment :D

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  stroke(190)

  strokeWeight(20)

  //Right Leg
  line(250,280,265,370)
  line(265,370,265,450)

  //Left Leg
  line(250,280,235,370)
  line(235,370,235,450)

  stroke(0)

  strokeWeight(20)
  
  //Main Body
  line(250,120,250,280)
  
  //Right Arm
  line(250,140,180,210)
  line(180,210,140,140)

  //Right Hand
  fill(220,150,0)
  strokeWeight(0)
  circle(140,140,30)

  //Left Arm
  strokeWeight(20)
  line(250,140,320,210)
  line(320,210,360,280)

  //Left Hand
  strokeWeight(0)
  circle(360,280,30)
  

  //Hair
  strokeWeight(20)
  fill(0)
  rect(223,40,54)
  ellipse(250,47,75,30)

  //Head
  strokeWeight(0)

  fill(220,150,0)

  circle(250,100,75)

  //Jacket

  fill(250)
  quad(225,136,240,136,240,280,225,280)
  quad(275,136,260,136,260,280,275,280)
  fill(200)
  circle(225,136,20)
  circle(275,136,20)
  circle(232,136,20)
  circle(268,136,20)

  //Shoes
  fill(0)
  circle(265,450,30)
  circle(235,450,30)

}
