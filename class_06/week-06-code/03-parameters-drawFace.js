// WEEK 06 · 03 · PARAMETERS
// One definition, two calls, two different faces.
// Nothing in the body is a fixed position — everything is worked out
// from x, y, and size, so a bigger face gets bigger, wider-set eyes.
// Try: draw a tiny face in the top-left corner.
// Try: add a fourth parameter (a color? a mood?).

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  drawFace(150, 200, 80);
  drawFace(450, 200, 180);
}

function drawFace(x, y, size) {
  // console.log("inside drawFace", x); // uncomment to watch the calls happen

  fill("wheat");
  circle(x, y, size); // head

  fill("black");
  circle(x - size / 4, y - size / 10, size / 10); // eyes
  circle(x + size / 4, y - size / 10, size / 10);

  line(x - size / 6, y + size / 4, x + size / 6, y + size / 4); // mouth
}
