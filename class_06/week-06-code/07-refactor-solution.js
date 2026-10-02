// WEEK 06 · 07 · REFACTOR — one possible solution (instructor reference)
// The numbers that changed between the two blocks all moved with the
// head's x, so x becomes a parameter and the rest are offsets from it.

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  drawFace(100, 100);
  drawFace(250, 100);
  drawFace(350, 60); // third face: one line
}

function drawFace(x, y) {
  circle(x, y, 80);                    // head
  circle(x - 20, y - 8, 10);           // eyes — change 10 here, changes everywhere
  circle(x + 20, y - 8, 10);
  line(x - 13, y + 16, x + 13, y + 16); // mouth
}
