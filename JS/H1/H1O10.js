function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
    background('lavender');
}

function draw() {
  fill('wheat');
rect(0,0,450,30);
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(round(mouseX),round(mouseY),10);
}
