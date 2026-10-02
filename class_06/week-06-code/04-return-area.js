// WEEK 06 · 04 · RETURN
// area() doesn't draw anything. It answers a question and hands the answer back.
// The console.log lines are tests: one normal input, one edge case, one weird one.

function setup() {
  createCanvas(400, 400);
  textSize(20);

  console.log(area(3, 4));  // 12  — normal
  console.log(area(0, 4));  // 0   — edge case
  console.log(area(-3, 4)); // -12 — is that a bug? depends what area() promised
}

function draw() {
  background(240);

  let w = mouseX;
  let h = mouseY;
  let a = area(w, h); // the call is replaced by the value it returns

  fill(120, 0, 120);
  rect(0, 0, w, h);

  fill(0);
  text("area(" + w + ", " + h + ") = " + a, 20, height - 20);
}

function area(w, h) {
  return w * h;
}
