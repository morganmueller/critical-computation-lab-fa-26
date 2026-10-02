// WEEK 06 · 05 · RETURN A BOOLEAN
// Last week's Rollover Button needed the "is the mouse inside?" check twice.
// Now it's written once, in a function that returns true or false.
// Try: add a second button without writing another long && expression.

let bx = 150;
let by = 150;
let bw = 100;
let bh = 60;
let on = false;

function setup() {
  createCanvas(400, 400);
}

function mouseIsInside(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
  if (mouseIsInside(bx, by, bw, bh)) {
    on = !on;
  }
}

function draw() {
  if (on) {
    background(255, 221, 87);
  } else {
    background(240);
  }

  if (mouseIsInside(bx, by, bw, bh)) {
    fill(120, 0, 120);
  } else {
    fill(200);
  }
  rect(bx, by, bw, bh);
}
