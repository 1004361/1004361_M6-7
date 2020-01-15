function setup() {
  var myCanvas = createCanvas(450,450);
  background('darkred');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(0,225,450,0,450,450);

  noStroke();
  fill('purple');
  triangle(0,450,0,0,450,225);
}
