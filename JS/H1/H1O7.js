function setup() {
  var myCanvas = createCanvas(450,450);
  background('lavender');
  myCanvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  translate(225,225);
  rect(0,0,200,200);
  push();
  rotate(45);
  rect(0,0,200,200);
pop();
  rect(0,0,200,200);
  fill(225,225,0)
}
