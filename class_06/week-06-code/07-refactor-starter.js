// WEEK 06 · 07 · REFACTOR (pairs, one editor)
// Two faces, drawn the copy-paste way.
// 1. Find the repetition. What changes between the two blocks?
// 2. Write ONE function, drawFace(x, y), that draws a face.
// 3. Replace both blocks with two calls.
// 4. Add a third face without typing another circle().
// Stretch: make the eyes bigger on every face by changing one line.

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  circle(100, 100, 80);
  circle(80, 92, 10);
  circle(120, 92, 10);
  line(87, 116, 113, 116);

  circle(250, 100, 80);
  circle(230, 92, 10);
  circle(270, 92, 10);
  line(237, 116, 263, 116);
}
