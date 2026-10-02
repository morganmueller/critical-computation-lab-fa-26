# Week 06 — Functions

## Today

| Time | Segment |
| --- | --- |
| 5 min | Check-in & housekeeping |
| 10 min | Assignment #3 share-out |
| 20 min | Lecture #4 discussion |
| 15 min | Assignment #4: Part 1 review / Part 2 grouping |
| 10 min | Quick review: conditionals, local vs. global variables |
| 40 min | Functions: built-in → user-defined → parameters → `return` |
| 10 min | Break |
| 20 min | Modulo + `for` loop introduction |
| 25 min | Pair programming: refactor with functions, Function Telephone |

## Upcoming events

- Saturday 10/3 — NYC Processing Community Day: [Schedule](https://www.pcd2026.nyc/) | [Free RSVP](https://www.eventbrite.com/e/processing-community-day-2026-nyc-tickets-1995608029336). If you attend, send me an email with things you learned / saw / were inspired by from the day and I will give extra credit.
- Monday 10/5 — Volvox Labs Field Trip: [Free RSVP](https://narwhalnation.newschool.edu/event/12776851)

## Assignment #3 share-out

- In groups of 3, share your work, following our critique structure for ~15 minutes.
- When you are done, pick one person from your group to share their project with the class. This should not be someone who shared previously.

## Lecture #4 discussion

Three terms from the lecture:

- **Modularity** — how far a system's parts can be separated and recombined. In code: small named pieces that each do one job (`drawFace()` built from `drawHead()`, `drawEyes()`, `drawMouth()`).
- **Reusability** — once a behavior is captured, using it again costs almost nothing. One definition, forty calls per frame.
- **Utilitarianism** — an ethical theory that judges an action by its outcomes: the right choice is the one that produces the greatest good for the greatest number. It's the default logic of cost-benefit thinking in business and engineering. Its limit: we can't fully predict consequences, and "the greatest number" can hide who is left out.

Discussion questions:

1. Dominant technologies treat utilitarianism, modularity, and reusability as preferred characteristics. Are there examples from your own life where a parallel narrative exists — experiences, objects, or products that did *not* foreground these values? If you can't think of any, why might that be?
2. "Change once, changed everywhere" works in both directions. Think of an app you use daily. What small function inside it, if it were slightly wrong, would affect millions of people?
3. Who notices the bug, and who pays for it (compute, energy, people's time, trust)? Are they the same people?
4. Design Systems International builds tools and systems rather than one-off designs. What do you gain when you design the rules instead of the thing? What do you give up?

## Assignment #4 — Exquisite Corpse

- **Part 1 review** — a few volunteers share their Part 1; we'll fix anything that got stuck together.
- **Part 2 grouping** — form groups before the break.
- [Assignment page](https://parsonsdt.github.io/critical-computation-2022/assignment-4.html)

An exquisite corpse only works because everyone agrees on where the pieces join. That agreement is exactly what a function's name and parameters are.

## Quick review

### Conditionals

A nested `if`, an `else`, and a second `if` that runs after both:

```js
if (mX > width / 2) {
  myColor = color(255, 0, 0);
  if (mY < height / 2) {
    myColor = color(0, 255, 0);
  }
} else {
  myColor = color(120, 0, 120);
}

if (isPressed) {
  myColor = 0;
}
```

What color do you get if:

1. The mouse is on the right half of the sketch?
2. The mouse is on the left half?
3. The mouse is in the upper right corner?
4. The mouse is pressed?

### Local and global variables

```js
let rectWidth = 55;          // global — declared outside every function

function draw() {
  let mX = mouseX;           // local — declared inside draw()
}
```

- **Global** — declared at the top, outside `setup()` and `draw()`. The value is stored until the program ends, and any function can read or change it.
- **Local** — declared inside a function. The value is discarded when that function finishes, and only that function can see it.

## Functions

### 1. Functions do things — and you already call them

- `setup()` and `draw()` run the code inside them, once or over and over.
- `rect()`, `ellipse()`, `circle()` draw a shape.
- `fill()` and `stroke()` set the color for whatever is drawn after them.

Functions are always followed by parentheses, and they often (not always) expect values inside those parentheses.

A function is **a named set of instructions you can run again and again** — a recipe. Ingredients in, steps, result out.

### 2. User-defined functions

Same idea, but we write the recipe ourselves, store it under a name, and reuse it as many times as we want.

```js
// TO DEFINE A FUNCTION
function myCoolFunction(parameter1, parameter2) {
  // code to be executed goes here
}

// TO CALL A FUNCTION
myCoolFunction(argument1, argument2);
```

- **Define** = write the recipe card. Defining draws nothing; the card just sits in a drawer.
- **Call** = ask for it to be cooked. Nothing happens until you call it.
- **Parameters** are the named empty boxes in the definition. **Arguments** are the actual values you pass in a call.

Smallest possible example:

```js
// define
function yourName(firstName, lastName) {
  console.log("my name is " + firstName + " " + lastName);
}

// call
yourName("Morgan", "Mueller");
```

### 3. Parameters make it flexible

The body never uses a fixed number — every position is worked out from `x`, `y`, and `size`, so a bigger face gets bigger, wider-set eyes.

```js
function drawFace(x, y, size) {
  circle(x, y, size);                             // head
  circle(x - size / 4, y - size / 10, size / 10); // left eye
  circle(x + size / 4, y - size / 10, size / 10); // right eye
}

drawFace(150, 200, 80);  // small face
drawFace(450, 200, 180); // big face, same recipe
```

What happens at a call: `draw()` pauses → jumps into `drawFace` → runs with `x = 150, y = 200, size = 80` → returns to the next line of `draw()`.

Try it:

- What call draws a tiny face in the top-left corner?
- What would you add as a fourth parameter?

### 4. `return`

`return` ends the function and hands a value back to whoever called it.

```js
function area(w, h) {
  return w * h;
}

let a = area(3, 4); // a is now 12
```

Rule of thumb: drawing functions *do* things; returning functions *answer questions*. You already use returning functions — `random()`, `dist()`, `millis()`, and `map()`.

Last week's Rollover Button needed the "is the mouse inside?" check written twice. Now it's written once:

```js
function mouseIsInside(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

if (mouseIsInside(bx, by, bw, bh)) {
  fill(120, 0, 120);
}
```

### 5. `map()` is a returning function

`map(value, start1, stop1, start2, stop2)` re-maps a number from one range to another and returns the result.

```js
let d = map(mouseX, 0, width, 10, 200);
circle(width / 2, height / 2, d);
```

### 6. Steps to simplify code with functions

1. Identify the sections of code that are repetitive.
2. Add the function syntax. The definition goes outside `setup()` and `draw()`.
3. Write the body, replacing the numbers that change with parameters.
4. Call it in the sketch.

### 7. Test the smallest unit

Every time you write a function, call it with one normal input, one edge case, and one weird input.

```js
console.log(area(3, 4));  // 12
console.log(area(0, 4));  // 0
console.log(area(-3, 4)); // -12 — is that a bug? depends on what the function promised
```

### Exercise: Plant a Garden (solo or pairs)

Write one function that draws a flower, then use it to fill a garden.

```js
// PLANT A GARDEN
// Goal: one drawFlower() function, many flowers.
// Work through the TODOs in order. Run your sketch after each one.

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 230, 255);

  noStroke();
  fill(90, 170, 90);
  rect(0, 300, width, 100); // the ground

  // TODO 2: call drawFlower() three times, with different arguments

}

// TODO 1: define drawFlower(x, y, size)
//   - a stem: a line from (x, y) straight down to the ground (y = 300)
//   - four petals: circles just left, right, above, and below (x, y)
//   - a center: one circle at (x, y)
// Nothing in the body should be a fixed position.
// Work everything out from x, y, and size.

```

1. **Define it.** Write `drawFlower(x, y, size)` below `draw()`. Hint: the left petal could be `circle(x - size / 2, y, size / 2)`.
2. **Call it.** Draw three flowers of different sizes in different places. You should not type any new `circle()` lines to do this.
3. **Add a parameter.** Add a fourth parameter, `petalColor`, and use it in a `fill()` inside the function. Update your three calls so each flower is a different color.
4. **Return a value.** Write a second function, `flowerHeight(x)`, that returns a `y` position, so that flowers further right are taller. Hint: `map()` can turn `x` (0 to `width`) into a height (250 to 100). Use it in a call: `drawFlower(200, flowerHeight(200), 40, "pink")`.
5. **Make it interactive.** Add one more call that uses `mouseX`: `drawFlower(mouseX, flowerHeight(mouseX), 40, "orange")`. Move the mouse across the canvas and watch the flower grow.

*Stretch:* write a function `isTall(y)` that returns `true` if a flower's `y` is above 175. Use it in an `if` to give tall flowers a different petal color.

*Check yourself:* make every flower's center bigger by changing one line. If you have to change more than one, something is still repeated.

## Break

## Modulo + `for` loop introduction

### Modulo

`%` gives the **remainder** after division. `7 % 3` is `1`, because 3 goes into 7 twice with 1 left over.

Warm-up — no editor:

1. `10 % 3`
2. `9 % 3`
3. `4 % 2`
4. `5 % 2`
5. `3 % 5`

Two things modulo is good for:

- **Wrapping.** `n % 4` can only ever be 0, 1, 2, or 3, no matter how big `n` gets. You used this last week: `millis() % 6000` is what made the Traffic Light start over.
- **Every other / every nth.** `n % 2 == 0` is true for even numbers, `n % 3 == 0` for every third.

```js
let n = floor(frameCount / 30); // counts up forever

n % 4      // only ever 0, 1, 2, 3
n % 2 == 0 // true, false, true, false ...
```

What's the biggest number `n % 4` can ever be? Why never 4?

### `for` loop

Five circles, the copy-paste way:

```js
circle(50, 100, 40);
circle(125, 100, 40);
circle(200, 100, 40);
circle(275, 100, 40);
circle(350, 100, 40);
```

Only `x` changes, and it goes up by 75 each time. A function removes repetition by *naming* it; a loop removes repetition by *counting* it.

```js
for (let i = 0; i < 5; i++) {
  circle(50 + i * 75, 100, 40);
}
```

Three parts inside the parentheses, separated by semicolons:

| Part | In the example | What it does |
| --- | --- | --- |
| start | `let i = 0` | make a counter; runs once |
| condition | `i < 5` | checked before every pass; when it's false, the loop stops |
| update | `i++` | runs after every pass; `i++` is short for `i = i + 1` |

Step by step: `i` is 0 → draw at 50. `i` is 1 → draw at 125. … `i` is 4 → draw at 350. `i` is 5 → `5 < 5` is false, stop.

- `i` is a local variable. It only exists inside the loop.
- The whole loop finishes inside a single frame of `draw()`. It's not animation — all five circles appear at once.

All three of today's ideas together — a loop calling a function, with modulo picking every other one:

```js
for (let i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    drawFace(50 + i * 100, 100, 80);
  } else {
    drawFace(50 + i * 100, 100, 40);
  }
}
```

Try it:

- Fit 12 faces across the same canvas.
- Swap `i % 2` for `i % 3` and predict the pattern before running it.

## Pair programming

### Refactor (pairs, one editor)

Two faces, drawn the copy-paste way:

```js
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
```

1. Find the repetition. What changes between the two blocks?
2. Write ONE function, `drawFace(x, y)`, that draws a face.
3. Replace both blocks with two calls.
4. Add a third face without typing another `circle()`.

*Stretch:* make the eyes bigger on every face by changing one line. That's "change once, changed everywhere."

## Tutorials

- [p5 Functions vs. User-Defined Functions](https://youtu.be/vPcoVHffsX0)
- [Argument and Parameters](https://youtu.be/73wLlJFWXQg)

For next week:

- [for Loop](https://youtu.be/QdGeb0H5idM)
- [Nested for Loops](https://youtu.be/FAVvj1M6klc)
- [Modulo](https://youtu.be/LMWRkUlhY7s)
- (Optional) [rotate + for Loop](https://youtu.be/kP-RkS70Lm8)
- (Optional) [blendMode + Loops](https://youtu.be/NDn7y4nWekE)

## Glossary

| Term | Meaning |
| --- | --- |
| function | a named set of instructions you can run again and again |
| define | write the function: `function name(parameters) { ... }` |
| call | run the function: `name(arguments);` |
| parameter | a named placeholder in the definition; a local variable |
| argument | the actual value passed in a call |
| `return` | ends the function and hands a value back to the caller |
| global variable | declared outside any function; lives for the whole program |
| local variable | declared inside a function; gone when the function finishes |
| DRY | Don't Repeat Yourself |
| `%` (modulo) | the remainder after division; wraps a number into a fixed range |
| `for` loop | repeats a block of code a counted number of times: `for (start; condition; update) { ... }` |
| `i++` | short for `i = i + 1` |
| modularity | breaking a problem into small, named, swappable pieces |
