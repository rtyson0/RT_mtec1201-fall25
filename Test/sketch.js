//A Simple Laundrymat//



let x1 = [0, 100, 200, 300, 400, 500, 600, 700];
let x2 = [50, 150, 250, 350, 450, 550, 650, 750];

function setup() 
{
  createCanvas(800, 600);
  
}

function draw() 
{
  background(0);
  
  //Background

  strokeWeight(0)

  fill(255)

  rect(x1[0], 400, 100)
  rect(x1[2], 400, 100)
  rect(x1[4], 400, 100)
  rect(x1[6], 400, 100)

  rect(x1[1], 500, 100)
  rect(x1[3], 500, 100)
  rect(x1[5], 500, 100)
  rect(x1[7], 500, 100)

  fill(200)
  rect(x1[0], x1[0], 800, 400)

  //Machines
  fill(100)
   
  for (let x = 40; x < x1[4]; x += 20){
    rect(x, x2[2], x, 100)
  }

}
