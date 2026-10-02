// WEEK 06 · 01 · REVIEW: conditionals + local vs. global variables
// Predict before running — what color is the square when:
//   1. the mouse is on the right half?
//   2. the mouse is on the left half?
//   3. the mouse is in the upper right corner?
//   4. the mouse is pressed?
// Then: which variables are global? Which are local?

let myColor;          // global
let rectWidth = 55;   // global
let rectHeight = 55;  // global

function setup() {
  createCanvas(640, 360);
  myColor = color(0, 0, 255); // color() only works once p5 has started
}

function draw() {
  let isPressed = mouseIsPressed; // local to draw()
  let mX = mouseX;                // local to draw()
  let mY = mouseY;                // local to draw()

  if (mX > width / 2) {
    myColor = color(255, 0, 0);     // right half: red
    if (mY < height / 2) {
      myColor = color(0, 255, 0);   // upper right: green (overrides red)
    }
  } else {
    myColor = color(120, 0, 120);   // left half: purple
  }

  if (isPressed) {
    myColor = 0;                    // pressed: black, wherever the mouse is
  }

  background(255);
  fill(myColor);
  rect(mX, mY, rectWidth, rectHeight);
}
