function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255);


  noFill();
  stroke(0);
  strokeWeight(2);

  rect(300, 100, 600, 600);


  fill(0);
  ellipse(600, 400, 30, 30);


  noFill();
  ellipse(600, 400, 150, 150);


  rect(250, 50, 100, 100);
  rect(850, 50, 100, 100);
  rect(250, 650, 100, 100);
  rect(850, 650, 100, 100);


  for (let x = 565; x <= 635; x = x + 35) {
    line(x, 100, x, 700);
  }


  line(300, 400, 900, 400);


  ellipse(250, 400, 100, 100);
  ellipse(950, 400, 100, 100);
}
