// WEEK 06 · 09 · for LOOP
// Five circles. First the copy-paste way, then the loop.
// Only x changes, and it goes up by 75 each time.
// Try: change 5 to 3. Then to 50. What do you have to change to fit them all?

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  // the copy-paste way
  circle(50, 100, 40);
  circle(125, 100, 40);
  circle(200, 100, 40);
  circle(275, 100, 40);
  circle(350, 100, 40);

  // the loop
  //   start: let i = 0   (runs once)
  //   condition: i < 5   (checked before every pass)
  //   update: i++        (runs after every pass)
  for (let i = 0; i < 5; i++) {
    // console.log(i); // uncomment to watch i count (it never stops: draw() loops too)
    circle(50 + i * 75, 200, 40);
  }
}
