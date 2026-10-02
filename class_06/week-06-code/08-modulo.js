// WEEK 06 · 08 · MODULO
// % gives the remainder after division.
// n counts up forever. n % 4 can only ever be 0, 1, 2, or 3.
// n % 2 == 0 is true for every other n — that's the flashing background.
// Ask: what's the biggest number that shows up on the right? Why never 4?
// Try: change 4 to 7.

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  let n = floor(frameCount / 30); // goes up by 1 twice a second

  if (n % 2 == 0) {
    background(255, 221, 87);
  } else {
    background(40);
  }

  fill(120, 0, 120);
  text(n + " % 4 = " + (n % 4), width / 2, height / 2);
}
