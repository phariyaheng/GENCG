function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255);

  // 1. grosses Quadrat
  
  stroke(0);
  strokeWeight(2);

  rect(300, 100, 600, 600);
  //x-Position, y-Position, Breite, Höhe

  // 2. Punkt in der Mitte

  fill(0);
  ellipse(600, 400, 30, 30);

  // 3. Grösserer Kreis um kleinen Kreis

  noFill();
  ellipse(600, 400, 150, 150);


  // 4. Kleine Quadrate an den Ecken
  
  rect(250, 50, 100, 100);
  rect(850, 50, 100, 100);
  rect(250, 650, 100, 100);
  rect(850, 650, 100, 100);


  // 5. Drei vertikale Linien

  line(565, 100, 565, 700);
  line(600, 100, 600, 700);
  line(635, 100, 635, 700);

  // 6. Horizontale Linie

  line(100, 400, 1100, 400,);

  // 7. 2 Kreise

  ellipse(950, 400, 100, 100);
  ellipse(250, 400, 100, 100);

}
