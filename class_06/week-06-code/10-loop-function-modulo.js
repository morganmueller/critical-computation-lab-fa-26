// WEEK 06 · 10 · ALL THREE TOGETHER
// A loop calls a function; modulo picks every other one.
// Try: 12 faces across the same canvas (you'll need to change two numbers).
// Try: swap i % 2 for i % 3 — predict the pattern first.

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

  for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) {
      drawFace(50 + i * 100, 100, 80);
    } else {
      drawFace(50 + i * 100, 100, 40);
    }
  }
}

function drawFace(x, y, size) {
  fill("wheat");
  circle(x, y, size);
  fill("black");
  circle(x - size / 4, y - size / 10, size / 10);
  circle(x + size / 4, y - size / 10, size / 10);
  line(x - size / 6, y + size / 4, x + size / 6, y + size / 4);
}
