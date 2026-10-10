# Week 07: 10/9/2026

## Agenda

1. [Lecture #5 Reflection: Illusion as Tactics](#lecture-5-reflection-illusion-as-tactics)
2. [Assignment #5 [Part 1] Self-Review](#assignment-5-part-1-self-review)
3. [Tutorial: Repetition and Loops](#tutorial-repetition-and-loops)
4. [Walkthrough: Patterns, Grids, and Illusions](#walkthrough-patterns-grids-and-illusions)
5. [Mini Assignments](#mini-assignments)
6. [Assignment #5 [Part 2]](#assignment-5-part-2)
7. [Extra Review Materials](#extra-review-materials)
8. [Coding Glossary](#coding-glossary)

## Lecture #5 Reflection: Illusion as Tactics

Pick **one** prompt and write three or four sentences.

The lecture's examples had something in common: the illusion was doing a job. The pattern inside a security envelope hides the letter. Knitting carried coded messages past people who saw only knitting. Dazzle camouflage on ships didn't hide the ship at all; it made its speed and heading hard to judge.

1. Hiding and confusing are different tactics. A security envelope hides; dazzle confuses. Which is each of your three Assignment #5 ideas doing?
2. Where is a pattern doing protective work in your own surroundings? Think about clothing, packaging, architecture, screens.
3. Who is an illusion aimed at? A human eye and a camera running face detection are fooled by different things. Pick one audience for your illusion and say why.
4. Pattern-making is ancient and culturally specific. What patterns did you grow up around (textiles, tiles, signage, a game, a screen)? Could one of them be the starting point for your illusion?

## Assignment #5 [Part 1] Self-Review

Look at each of your three ideas and answer these on paper. They translate your drawing into the vocabulary of this week's code.

1. **What is the repeated unit?** (a stripe, a square, a ring, a line)
2. **How does it repeat?** In a row, in a grid, around a center? Roughly how many times?
3. **What changes from one copy to the next?** Position only, or also size, color, rotation?
4. **What moves?** Assignment #5 has to animate. Which single number, if it changed a little every frame, would make the illusion work?

If you can answer all four, you can already describe your sketch as a loop: question 2 is the loop, question 3 is what you do with the counter, question 4 is a variable.

## Tutorial: Repetition and Loops

### In Class 7 Practice 1

Begin by making a new sketch titled "In Class 7 Practice 1". Use a 600 × 600 canvas.

- Create 4 columns
- With an if-statement, make each individual column turn red when you hover over it. Each column should _not_ have a fill until they are hovered. They can either have `noFill()` or a fill of white.

<details>
<summary>One possible solution</summary>

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  if (mouseX > 0 && mouseX < 150) {
    fill("red");
  } else {
    fill(255);
  }
  rect(0, 0, 150, height);

  if (mouseX > 150 && mouseX < 300) {
    fill("red");
  } else {
    fill(255);
  }
  rect(150, 0, 150, height);

  if (mouseX > 300 && mouseX < 450) {
    fill("red");
  } else {
    fill(255);
  }
  rect(300, 0, 150, height);

  if (mouseX > 450 && mouseX < 600) {
    fill("red");
  } else {
    fill(255);
  }
  rect(450, 0, 150, height);
}
```

</details>

### Identifying Patterns

With the sketch you just made, what pattern are we seeing? How can we mathematically relate each rectangle with one another?

Look at what changes from one column to the next:

| Column | x position | hover check |
| --- | --- | --- |
| 0 | 0 | `mouseX > 0 && mouseX < 150` |
| 1 | 150 | `mouseX > 150 && mouseX < 300` |
| 2 | 300 | `mouseX > 300 && mouseX < 450` |
| 3 | 450 | `mouseX > 450 && mouseX < 600` |

Everything is the same four times except one number, and that number goes up by 150 each time. If we call the column number `i`:

- the x position is `i * 150`
- the hover check is `mouseX > x && mouseX < x + 150`

Once you can describe the repetition with one number that counts up, you can hand the repeating to a loop.

### Coding Glossary: Loops

| Term | Meaning |
| --- | --- |
| loop | code that repeats the content inside `{}`. The `draw()` is a loop that already exists for us. |

### While Loop

A `while()` loop is very similar to an `if()` statement. They follow similar syntax that use `()` and `{}`.

When we build out an `if()` statement, we put the conditional expression inside the `()` and the code that is locked in the `{}`. A `while()` loop is the same. The difference: an `if()` checks once; a `while()` keeps checking, and keeps running the code, for as long as the expression is `true`.

```js
while (conditional expression) {
  // loop something
}
```

But, there are some extra steps in order to get the loop functional.

1. Step 1: The first thing we want is to declare a number that will control the loop and determine _when the loop stops_. This is just a normal variable.

```js
let iterator = 0;
```

2. Step 2: Next, we determine how many times our loop wants to execute using our new variable and a conditional expression. Once this conditional becomes `false`, the loop stops.

```js
iterator < 10;
```

This means our loop will iterate 10 times: `iterator` is 0 on the first pass and 9 on the last. This conditional is what goes inside the `()` of our `while()`

```js
while (iterator < 10) {}
```

3. Step 3: We need to change our variable inside our loop, meaning inside the `{}`. This is just like a variable changing in the draw, where it increments once it hits the bottom (or wherever the variable is located).

```js
while (iterator < 10) {
  iterator += 1;
}
```

`iterator += 1` is short for `iterator = iterator + 1`.

Two things to watch for:

- **Don't forget Step 3.** If the variable never changes, the conditional never becomes `false`, the loop never ends, and the browser tab can freeze. Save your sketch before running a new loop.
- **Declare the variable inside `draw()`.** It needs to start over at 0 every frame. If you declare it at the top of the sketch, the loop only works on the very first frame.

### In Class 7 Practice 2

Duplicate / Fork your "In Class 7 Practice 1" and rename it to "In Class 7 Practice 2"

- Re-write your code using `while` loops.

<details>
<summary>One possible solution</summary>

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  let iterator = 0;

  while (iterator < 4) {
    let x = iterator * 150;

    if (mouseX > x && mouseX < x + 150) {
      fill("red");
    } else {
      fill(255);
    }
    rect(x, 0, 150, height);

    iterator += 1;
  }
}
```

</details>

### For Loop

A `for()` loop is a shorthand way of writing a `while()` loop. Instead of having 3 separate lines of code (declaring iterator, writing conditional, incrementing iterator), we do it all inside the `()` of the `for()`, all separated by a `;`.

To write

```js
let iterator = 0;
while (iterator < 10) {
  iterator += 1;
}
```

As a `for()` loop, we combine all these lines into one.

```js
for (let iterator = 0; iterator < 10; iterator += 1) {
  // do something 10 times
}
```

Most programmers shorten this further. The iterator is usually named `i`, and `i++` is short for `i += 1`. This is the version you'll see everywhere, including the rest of this page:

```js
for (let i = 0; i < 10; i++) {
  // do something 10 times
}
```

### In Class 7 Practice 3

Duplicate / Fork your "In Class 7 Practice 2" and rename it to "In Class 7 Practice 3"

- Re-write your code using `for` loops.

<details>
<summary>One possible solution</summary>

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  for (let i = 0; i < 4; i++) {
    let x = i * 150;

    if (mouseX > x && mouseX < x + 150) {
      fill("red");
    } else {
      fill(255);
    }
    rect(x, 0, 150, height);
  }
}
```

</details>

Now change the `4` to `12` and the `150`s to `50`. Twelve hover columns, and the code didn't get any longer.

[Back to top](#agenda)

---

## Walkthrough: Patterns, Grids, and Illusions

Every sketch below is complete. Paste it into the [p5 editor](https://editor.p5js.org/), run it, and do the "Try it" before moving on.

### 1. Tracing a `for` loop

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  for (let i = 0; i < 5; i++) {
    circle(100 + i * 100, 300, 60);
  }
}
```

Three parts inside the parentheses, separated by semicolons:

| Part | Here | What it does |
| --- | --- | --- |
| start | `let i = 0` | makes a counter; runs once |
| condition | `i < 5` | checked before every pass; when it's false, the loop stops |
| update | `i++` | runs after every pass; short for `i = i + 1` |

Trace it by hand. This is the single most useful habit for loops:

| Pass | `i` | `i < 5`? | `100 + i * 100` | What happens |
| --- | --- | --- | --- | --- |
| 1 | 0 | true | 100 | circle at x = 100 |
| 2 | 1 | true | 200 | circle at x = 200 |
| 3 | 2 | true | 300 | circle at x = 300 |
| 4 | 3 | true | 400 | circle at x = 400 |
| 5 | 4 | true | 500 | circle at x = 500 |
| — | 5 | false | — | loop stops |

The pattern `start + i * spacing` shows up constantly. `start` is where the first one goes; `spacing` is the distance between them.

**Try it**

- Draw 10 circles that still fit on the canvas. You'll need to change the condition *and* the spacing.
- Add `console.log(i);` as the first line inside the loop. Why does the console never stop printing? (Because `draw()` itself repeats, and the whole loop runs again every frame.)

### 2. The counter can drive anything

`i` is just a number. Position is the obvious use, but you can put it anywhere a number goes.

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);
  noStroke();

  for (let i = 0; i < 10; i++) {
    fill(i * 25);                          // color: 0, 25, 50 ... 225
    circle(50 + i * 55, 300, 10 + i * 8);  // position AND size
  }
}
```

One counter, three jobs: the circles move right, get bigger, and get lighter.

**Try it**

- Make them get smaller instead of bigger, without changing the loop's first line. (Hint: start from a big number and subtract.)
- Use `i` for the `y` position too, so the row becomes a diagonal.

### 3. Counting in pixels instead

The counter doesn't have to be called `i` or go up by 1. This loop counts in pixels, straight across the canvas:

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noStroke();
  fill(0);

  for (let x = 0; x < width; x += 40) {
    rect(x, 0, 20, height);
  }
}
```

- `x += 40` is short for `x = x + 40`.
- The condition uses `width`, so the stripes fill the canvas whatever size it is.

Both styles are fine. They say the same thing two ways:

| Counting copies | Counting pixels |
| --- | --- |
| `for (let i = 0; i < 15; i++)` | `for (let x = 0; x < width; x += 40)` |
| position is `i * 40` | position is `x` |
| easy to say "I want 15" | easy to say "fill the canvas" |

Loops can count **down** too. That matters when shapes overlap, because later shapes cover earlier ones:

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  for (let d = 560; d > 0; d -= 40) {
    circle(300, 300, d); // biggest first, so the small ones land on top
  }
}
```

**Try it**

- In the stripes sketch, change `40` to `10`. Then change the `20` so the stripes are still half black, half white.
- In the circles sketch, flip the loop to count up (`let d = 40; d <= 560; d += 40`). What do you see, and why?

### 4. When loops go wrong

**The infinite loop.** If the condition never becomes false, the loop never ends, and the browser tab can freeze.

```js
// DON'T RUN THIS
for (let i = 0; i < 5; i--) {   // i goes 0, -1, -2 ... always less than 5
  circle(i * 50, 100, 20);
}
```

Before you press play, glance at the three parts and ask: does the update move the counter *toward* making the condition false? Save your sketch before running a new loop. If the tab does freeze, close it and reopen the editor.

**Off by one.** `i < 5` runs five times (0, 1, 2, 3, 4). `i <= 5` runs six times (0 through 5). If you have one shape too many or too few, check that symbol first.

**A loop is not animation.** The entire loop finishes inside one frame of `draw()`. All the circles appear at once. Movement comes from something changing *between* frames, which is part 8.

### 5. Loop + modulo: every other one

`i % 2 == 0` is true for every other number. Inside a loop, that gives you alternation.

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();

  for (let i = 0; i < 12; i++) {
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill(255, 221, 87);
    }
    rect(i * 50, 0, 50, height);
  }
}
```

**Try it**

- Change `i % 2` to `i % 3`. Predict the pattern before running it.
- Add an `else if (i % 3 == 1)` with a third color.

### 6. Nested loops: a grid

One loop makes a row. To make a grid, you want that row again and again, each one lower. "Again and again" is a loop, so put the row loop inside another loop.

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  for (let j = 0; j < 6; j++) {        // rows: j moves down
    for (let i = 0; i < 6; i++) {      // columns: i moves across
      circle(50 + i * 100, 50 + j * 100, 60);
    }
  }
}
```

The order is the part to understand. The outer loop takes one step, then the inner loop runs **completely**, then the outer loop takes its next step. Like a clock: the inner loop is the minute hand, the outer loop is the hour hand.

| `j` (row) | `i` (column) | circle drawn at |
| --- | --- | --- |
| 0 | 0, 1, 2, 3, 4, 5 | the whole top row, left to right |
| 1 | 0, 1, 2, 3, 4, 5 | the whole second row |
| … | … | … |
| 5 | 0, 1, 2, 3, 4, 5 | the whole bottom row |

6 rows × 6 columns = 36 circles from one `circle()` line.

Watch the order happen. This version reveals one more cell every few frames:

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  let n = floor(frameCount / 10) % 37; // how many cells to show: 0 up to 36, then start over
  let count = 0;                       // which cell we're on

  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 6; i++) {
      if (count < n) {
        circle(50 + i * 100, 50 + j * 100, 60);
      }
      count++;
    }
  }
}
```

**Try it**

- Swap the two `for` lines so the `i` loop is on the outside. The finished grid looks identical. What changed about the order it fills in?
- Make the grid 3 rows by 6 columns.

#### Make the grid adjustable

Hard-coded 50s and 100s are magic numbers. Use variables and the grid resizes itself:

```js
let cols = 6;
let rows = 6;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  let cellW = width / cols;
  let cellH = height / rows;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      rect(i * cellW, j * cellH, cellW, cellH);
    }
  }
}
```

Change `cols` to 20 and `rows` to 3. Nothing else needs to change. You'll use this skeleton for most of what follows.

### 7. The checkerboard: `(i + j) % 2`

In a grid, `i % 2` alone gives vertical stripes and `j % 2` alone gives horizontal stripes. Add them together first and you get a checkerboard.

```js
let cols = 8;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let cell = width / cols;
  noStroke();

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < cols; i++) {
      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      square(i * cell, j * cell, cell);
    }
  }
}
```

Why it works: here is `i + j` for the top-left corner of the grid. Even sums are black.

| | i = 0 | i = 1 | i = 2 | i = 3 |
| --- | --- | --- | --- | --- |
| **j = 0** | 0 | 1 | 2 | 3 |
| **j = 1** | 1 | 2 | 3 | 4 |
| **j = 2** | 2 | 3 | 4 | 5 |

Moving one step right or one step down always changes the sum by 1, so neighbors always differ.

**Try it**

- Replace `(i + j) % 2` with `i % 2`, then with `j % 2`.
- Try `(i + j) % 3 == 0`. What direction do the stripes run, and why?
- Try `(i * j) % 2 == 0`.

### 8. Every cell different: `map()` and `dist()`

Each cell knows its own `i` and `j`, so each cell can work out its own value for anything.

```js
let cols = 12;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);
  noStroke();
  fill(255, 221, 87);

  let cell = width / cols;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < cols; i++) {
      let x = i * cell + cell / 2;   // center of this cell
      let y = j * cell + cell / 2;

      let d = dist(x, y, mouseX, mouseY);  // how far is this cell from the mouse?
      let s = map(d, 0, 600, cell, 4);     // near = big, far = small
      s = constrain(s, 4, cell);

      circle(x, y, s);
    }
  }
}
```

Notice this sketch moves, even though the loop itself isn't animation. `draw()` redraws the whole grid 60 times a second, and `mouseX` and `mouseY` are different each time. That's the recipe for animating a pattern: **the loop draws everything; something outside the loop changes between frames.**

**Try it**

- Swap `cell` and `4` in the `map()` line.
- Use `d` for the fill color as well as the size.

### 9. Animating a pattern with `if` / `else`

Assignment #5 asks for exactly this: loops make the pattern, conditionals make it move. Two ways to do it, both built from things you already know.

#### A. Flip on a beat

`beat` counts up twice a second. Adding it to `i + j` shifts the whole checkerboard by one on every beat.

```js
let cols = 8;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let cell = width / cols;
  let beat = floor(frameCount / 30);
  noStroke();

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < cols; i++) {
      if ((i + j + beat) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      square(i * cell, j * cell, cell);
    }
  }
}
```

#### B. A variable that bounces: the Café Wall illusion

This is a real optical illusion. Rows of black and white tiles, with every other row slid sideways. The thin gray lines between rows are perfectly straight and parallel, but they appear to tilt.

`offset` is a global variable that slides back and forth between 0 and 30, using the same bounce as Week 05. Inside the loop, an `if` applies it only to odd rows.

```js
let offset = 0;
let speed = 0.5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(128); // gray shows through the gaps as the "mortar" lines
  noStroke();

  let tile = 60;

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 11; i++) {

      // color: alternate black and white along the row
      if (i % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }

      // position: only odd rows get shifted
      let shift = 0;
      if (j % 2 == 1) {
        shift = offset;
      }

      // (i - 1) starts one tile off the left edge, so shifting never leaves a hole
      rect((i - 1) * tile + shift, j * tile, tile, tile - 3);
    }
  }

  // the animation: one number changes a little every frame
  offset = offset + speed;
  if (offset > 30 || offset < 0) {
    speed = speed * -1;
  }
}
```

Watch the gray lines as the rows slide. When `offset` is 0 they look straight. As it grows they seem to slope, alternating directions. They never actually move.

**Try it**

- Change `tile - 3` to `tile`. The mortar lines disappear. Does the illusion survive?
- Change `background(128)` to `background(0)` or `background(255)`. The illusion depends on the mortar being *between* the two tile colors.
- Make every third row shift instead of every other one.

### 10. More illusions from loops

Three more starting points for Assignment #5. Each is short on purpose.

#### Hermann grid (nested loop)

Stare at one black square. Gray smudges appear in the white intersections you *aren't* looking at.

```js
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(255);
  noStroke();
  fill(0);

  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 6; i++) {
      square(10 + i * 100, 10 + j * 100, 80);
    }
  }
}
```

#### Moiré (one loop, two sets of rings)

Two identical sets of rings. One follows the mouse. The swirling bands you see aren't drawn anywhere; they come from the two patterns interfering.

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(2);

  for (let d = 10; d < 900; d += 12) {
    circle(300, 300, d);
    circle(mouseX, mouseY, d);
  }
}
```

#### Spokes (optional: `rotate()` + loop)

Each pass rotates a little further before drawing the same line. Transformations add up inside a loop, so 24 small turns make a full circle.

```js
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  strokeWeight(3);

  translate(width / 2, height / 2);
  rotate(frameCount * 0.01); // the whole wheel turns slowly

  for (let i = 0; i < 24; i++) {
    rotate(TWO_PI / 24);
    line(0, 40, 0, 250);
  }
}
```

**Try it**

- Hermann grid: change the gap between squares. When does the effect get stronger or disappear?
- Moiré: change `12` to `6`, then to `30`.
- Spokes: draw a second wheel on top that turns the other way (`rotate(frameCount * -0.02)` before a second loop).

More illusions to study: the [Illusions Index](https://www.illusionsindex.org/illusions).

[Back to top](#agenda)

---

## Mini Assignments

Ordered easiest to hardest.

### 1. Predict the loop (no editor)

Write your answer for each before running anything.

```js
// a
for (let i = 0; i < 4; i++) {
  circle(50 + i * 100, 100, 40);
}
```
What are the four x positions?

```js
// b
for (let i = 1; i <= 4; i++) { }
```
How many passes? What values does `i` take?

```js
// c
for (let x = 0; x < 600; x += 150) { }
```
What values does `x` take?

```js
// d
for (let i = 10; i > 0; i -= 2) { }
```
What values does `i` take?

```js
// e
for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 4; i++) {
    square(i * 50, j * 50, 50);
  }
}
```
How many squares? What are `i` and `j` when the 6th square is drawn?

```js
// f
for (let i = 0; i < 5; i--) { }
```
What happens?

```js
// g
let n = 3;
while (n > 0) {
  n -= 1;
}
```
How many passes? What is `n` after the loop ends?

### 2. Ruler (loop + modulo)

```js
// RULER
// Goal: tick marks across the canvas, like a ruler.
// Every 5th tick is taller.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  // TODO 1: use a for loop to draw a short vertical line (20 pixels tall)
  // every 20 pixels across the canvas. The bottom of every tick sits at y = 300.

  // TODO 2: make every 5th tick 60 pixels tall instead.
  // Hint: i % 5 == 0

}
```

*Stretch:* use `text()` to label the tall ticks with their number.

### 3. Gradient grid (nested loop + `map()`)

```js
// GRADIENT GRID
// Goal: a 10 x 10 grid of squares with no gaps.
// Squares get more red from left to right and more blue from top to bottom.

let cols = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  let cell = width / cols;

  // TODO 1: write the nested loop (j for rows, i for columns)

  // TODO 2: inside it, use map() to turn i into a red value (0 to 255)
  // and j into a blue value (0 to 255), then fill() with them

  // TODO 3: draw the square for this cell

}
```

*Stretch:* change `cols` to 60. If your code is right, nothing else needs to change.

### 4. Checkerboard remix (nested loop + modulo + interaction)

Start from the checkerboard in part 7.

1. Make it 12 × 12 by changing one number.
2. Make it flip colors on a beat (part 9A).
3. Highlight the whole column the mouse is over in a third color. Hint: `floor(mouseX / cell)` tells you which column the mouse is in. Compare it to `i`. (This is In Class 7 Practice 3 again, inside a grid.)

*Stretch:* highlight the mouse's row as well, and make the one cell where they cross a fourth color.

### 5. Sol LeWitt grid

Sol LeWitt's wall drawings are written instructions that other people carry out. Many of the early ones are built from straight lines in four directions: vertical, horizontal, and the two diagonals. Here is an instruction in that spirit:

> *Divide the wall into a grid of 36 equal squares. In each square, draw lines in one of four directions.*

The instruction doesn't say which direction goes in which square. That's the rule you get to write.

```js
// SOL LEWITT GRID
// Work through the TODOs in order. Run your sketch after each one.

let cols = 6;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(250);
  let cell = width / cols;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < cols; i++) {
      let direction = (i + j) % 4; // the rule: 0, 1, 2, or 3
      drawCell(i * cell, j * cell, cell, direction);
    }
  }
}

function mousePressed() {
  redraw();
}

function drawCell(x, y, size, direction) {
  noFill();
  square(x, y, size);

  if (direction == 0) {
    line(x + size / 2, y, x + size / 2, y + size); // vertical
  } else if (direction == 1) {
    // TODO 1: horizontal line through the middle of the cell
  } else if (direction == 2) {
    // TODO 1: diagonal, top-left corner to bottom-right corner
  } else {
    // TODO 1: diagonal, top-right corner to bottom-left corner
  }
}
```

1. **Finish the four directions.** Fill in the three TODOs.
2. **More lines.** A single line is thin. For the vertical and horizontal cells, use a `for` loop *inside* `drawCell()` to draw several evenly spaced parallel lines. That's a loop inside a function inside a nested loop.
3. **Change the rule.** Replace `(i + j) % 4` with a rule of your own. Some to try: `i % 4`, `(i * j) % 4`, `floor(random(4))`. With `random`, every click is a new installation of the same instructions.
4. **Write your own instruction.** Above `draw()`, write a one-sentence LeWitt-style instruction as a comment, then change the code to carry it out.

*With a partner (optional):* send each other only your instruction sentence from step 4, not your sketch. Code each other's. Then compare. Did the same sentence produce the same drawing? Where did you each have to make a decision the instruction left open?

*Stretch:* parallel diagonal lines that stay inside the cell.

### 6. Illusion study (warm-up for Assignment #5 Part 2)

Pick one illusion from this page (Café Wall, Hermann grid, Moiré, or Spokes) and make it your own. Your version must have:

- a 600 × 600 canvas
- a nested `for` loop
- at least one `%`
- one global variable that changes a little every frame, and an `if` that reverses it or resets it

Add one sentence as a comment at the top: what is this illusion hiding or confusing, and who is it aimed at?

You're welcome to grow this directly into your Assignment #5.

[Back to top](#agenda)

---

## Assignment #5 [Part 2]

Optical Illusion, Part 2. Due Thursday 10/15.

1. Choose the Part 1 idea with the most meaningful illusion tactic.
2. Build it. Canvas size 600 × 600. Use `for` loops and nested `for` loops to make the pattern, and `if` / `else` to animate it.
3. On your CC Portfolio Assignment #5 page, include: the embedded p5 sketch, your name, a description of the idea (context and visual strategy), and your reflections.
4. Reflect on: the process of researching, designing, and fine-tuning the illusion; and how it might be deployed in the world around you (a browser extension? a wearable?).

Submit to the CC Lab Canvas assignment and add it to your portfolio. Full brief: [Assignment #5 page](https://parsonsdt.github.io/critical-computation-2022/assignment-5.html).

## Extra Review Materials

- Coding Train [4.1: While and For Loops](https://www.youtube.com/watch?v=cnRD9o6odjk)
- Coding Train [4.2: Nested Loops](https://www.youtube.com/watch?v=1c1_TMdf8b8)
- p5.js Tutorial [Repeating with Loops](https://p5js.org/tutorials/repeating-with-loops/)
- [for Loop](https://youtu.be/QdGeb0H5idM)
- [Nested for Loops](https://youtu.be/FAVvj1M6klc)
- [Modulo](https://youtu.be/LMWRkUlhY7s)
- (Optional) [rotate + for Loop](https://youtu.be/kP-RkS70Lm8)
- (Optional) [blendMode + Loops](https://youtu.be/NDn7y4nWekE)

## Coding Glossary

| Term | Meaning |
| --- | --- |
| loop | code that repeats the content inside `{}`. The `draw()` is a loop that already exists for us. |
| `while` loop | repeats the code in `{}` for as long as the conditional in `()` is `true` |
| `for` loop | shorthand for a `while` loop: `for (start; condition; update) { ... }` |
| iterator / counter | the variable that controls the loop (often `i`); it decides when the loop stops |
| `i++` | short for `i += 1`, which is short for `i = i + 1` |
| `x += 40` | short for `x = x + 40` |
| `d -= 40` | short for `d = d - 40` |
| nested loop | a loop inside a loop; the inner loop runs completely for every step of the outer loop |
| infinite loop | a loop whose condition never becomes false; it never ends |
| off-by-one | running a loop one time too many or too few, usually `<` vs. `<=` |
| `%` (modulo) | the remainder after division; in a loop, picks every other / every nth |
| `(i + j) % 2` | the checkerboard test: true for alternating cells in a grid |
| moiré | a pattern that appears when two repeating patterns overlap |

[Back to top](#agenda)