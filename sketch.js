/*
	mouseDragged
*/

var startX;
var startY;
var finX;
var finY;
let words;

function preload() {
  img = loadImage('source.jpeg');
}


function setup() {
	createCanvas(1200, 800);
	background(220);
}

/* 
	when the mouse button is pressed and moving (dragged)
	draw an ellipse 
*/

function mousePressed() {
   startX = mouseX;
   startY = mouseY;
}

function draw() {
  background(200);
  image(img, 10, 10);
  
  noFill();
  stroke (10,200,10);
  strokeWeight(4);
  rect(startX, startY, finX, finY);

  fill(10,200,10);
  noStroke();
  textSize(20);
  text(words, finX+startX-40, finY+startY+20);
  
}

function mouseDragged() {
	finX =  mouseX-startX;
    finY = mouseY-startY;
}


function mouseReleased() {
  let labels = prompt("What are you trying to label:", "Dog");
  if (labels == null || labels == "") {
    words = "User cancelled the prompt.";
  } else {
    words = "Label: " + labels;
  }  

}