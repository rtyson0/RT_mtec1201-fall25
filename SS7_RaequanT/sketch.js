

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200,230,250);
  strokeWeight(0)

  

  //Structure of the Background//
  fill(150,50,50)
  rect(0,340,800,130)

  fill(100,200,200)
  rect(0,470,800,330)

  for(var structure = 5; structure <= width; structure = structure + 50){
    fill(200,100,100)
    rect(structure, 350, 40, 20)
    rect(structure, 380, 40, 20)
    rect(structure, 410, 40, 20)
    rect(structure, 440, 40, 20)
  }

  fill(200)
  rect(0,320,800,30)
  ///////////////////////////////




  
}
