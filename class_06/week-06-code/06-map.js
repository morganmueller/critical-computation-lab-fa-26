// WEEK 06 · 06 · map() IS A RETURNING FUNCTION
// map(value, start1, stop1, start2, stop2)
// mouseX runs 0 → width. We want a diameter that runs 10 → 200.
// Try: swap 10 and 200. What happens?

function setup() {
  createCanvas(400, 400);
  textSize(16);
}

function draw() {
  background(240);

  let d = map(mouseX, 0, width, 10, 200);

  fill(120, 0, 120);
  circle(width / 2, height / 2, d);

  fill(0);
  text("mouseX: " + mouseX + "   d: " + floor(d), 20, 30);
}
