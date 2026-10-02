# Week 06 — Functions


## Run of show

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

## Upcoming events:
   - Saturday 10/3 NYC Processing Community Day: [Schedule](https://www.pcd2026.nyc/) | [Free RSVP](https://www.eventbrite.com/e/processing-community-day-2026-nyc-tickets-1995608029336). If you attend, send me an email with things you learned / saw / inspired by from the day and I will give extra credit. 
   - Monday 10/5 Volvox Labs Field Trip : [Free RSVP](https://narwhalnation.newschool.edu/event/12776851)

## Assignment #3 share-out (10 min)

* In groups of 3, share your work, following our critique structure for ~15 minutes
* After you are done sharing, pick a person from your group to share their project with the class. These should not be the same people who shared previously 

## Lecture #4 discussion (20 min)

Quick refresher on the three terms before opening it up:

- **Modularity** — how far a system's parts can be separated and recombined. In code: small named pieces that each do one job (`drawFace()` built from `drawHead()`, `drawEyes()`, `drawMouth()`).
- **Reusability** — once a behavior is captured, using it again costs almost nothing. One definition, forty calls per frame.
- **Utilitarianism** — an ethical theory that judges an action by its outcomes: the right choice is the one that produces the greatest good for the greatest number. It's the default logic of cost-benefit thinking in business and engineering. Its limit: we can't fully predict consequences, and "the greatest number" can hide who is left out.

Prompts:

1. Dominant technologies treat utilitarianism, modularity, and reusability as preferred characteristics. Are there examples from your own life where a parallel narrative exists — experiences, objects, or products that did *not* foreground these values? If you can't think of any, why might that be?
2. From the lecture: "change once, changed everywhere" works in both directions. Think of an app you use daily. What small function inside it, if it were slightly wrong, would affect millions of people?
3. Who notices the bug, and who pays for it (compute, energy, people's time, trust)? Are they the same people?
4. Design Systems International builds tools and systems rather than one-off designs. What do you gain when you design the rules instead of the thing? What do you give up?

## Assignment #4 Exquisite Corpse (15 min)

- **Part 1 review** — a few volunteers project their Part 1; livecode fixes for anything that got stuck.
- **Part 2 grouping** — form groups before the break so the pair-programming block can use them.
- Assignment page (2022 version of the course site): https://parsonsdt.github.io/critical-computation-2022/assignment-4.html

The link to today: an exquisite corpse only works because everyone agrees on where the pieces join. That agreement is exactly what a function's name and parameters are.

## Quick review (10 min)

### Conditionals


The part that matters — a nested `if`, an `else`, and a second `if` that runs after both:

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

Ask before running — what happens if:

1. The mouse is on the right half of the sketch? (red)
2. The mouse is on the left half? (purple)
3. The mouse is in the upper right corner? (green — the nested `if` overrides the red)
4. The mouse is pressed? (black, anywhere — the last `if` runs after everything else)

### Local and global variables

Using the same file: which variables are global and which are local?

```js
let rectWidth = 55;          // global — declared outside every function

function draw() {
  let mX = mouseX;           // local — declared inside draw()
}
```

- **Global** (`myColor`, `rectWidth`, `rectHeight`) — declared at the top, outside `setup()` and `draw()`. The value is stored until the program ends, and any function can read or change it.
- **Local** (`isPressed`, `mX`, `mY`) — declared inside a function. The value is discarded when that function finishes, and only that function can see it.

Follow-up: why is `myColor` declared at the top but given its value inside `setup()`? (`color()` isn't available until p5 has started.) This matters in a minute: parameters are local variables too.

## Functions (40 min)

### 1. Functions do things — and you already call them

- `setup()` and `draw()` run the code inside them, once or over and over.
- `rect()`, `ellipse()`, `circle()` draw a shape.
- `fill()` and `stroke()` set the color for whatever is drawn after them.

Functions are everywhere. They are always followed by parentheses, and they often (not always) expect values inside those parentheses.

The lecture's version: a function is **a named set of instructions you can run again and again** — a recipe. Ingredients in, steps, result out.

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

The face from the lecture. Notice the body never uses a fixed number — every position is worked out from `x`, `y`, and `size`, so a bigger face gets bigger, wider-set eyes.

```js
function drawFace(x, y, size) {
  circle(x, y, size);                             // head
  circle(x - size / 4, y - size / 10, size / 10); // left eye
  circle(x + size / 4, y - size / 10, size / 10); // right eye
}

drawFace(150, 200, 80);  // small face
drawFace(450, 200, 180); // big face, same recipe
```


Trace it out loud: `draw()` pauses at the call → jumps into `drawFace` → runs with `x = 150, y = 200, size = 80` → returns to the next line of `draw()`. To see it happen, uncomment the `console.log` at the top of the body.

Ask the room: what call draws a tiny face in the top-left corner? (Something like `drawFace(40, 40, 30)`.) What would you add as a fourth parameter?

### 4. `return`

`return` ends the function and hands a value back to whoever called it.

```js
function area(w, h) {
  return w * h;
}

let a = area(3, 4); // a is now 12
```

Rule of thumb: drawing functions *do* things; returning functions *answer questions*. They already use returning functions — `random()`, `dist()`, `millis()`, and `map()`.

Callback to last week's Rollover Button, where the "is the mouse inside?" check had to be written twice. Now it's written once:

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
2. Add the function syntax — where does the definition go? (Outside `setup()` and `draw()`.)
3. Write the body, replacing the numbers that change with parameters.
4. Call it in the sketch.



### 7. Test the smallest unit

From the lecture: every time you write a function, call it with one normal input, one edge case, and one weird input.

```js
console.log(area(3, 4));  // 12
console.log(area(0, 4));  // 0
console.log(area(-3, 4)); // -12 — is that a bug? depends on what the function promised
```

These three lines are already in `04-return-area.js`; open the console.

## Break (10 min)

## Pair programming (25 min)

### Refactor (10 min · pairs, one editor)

Two faces, drawn the copy-paste way. Turn this into one function and two calls, then add a third face without typing another `circle()`.

**Hand out:** `week-06-code/07-refactor-starter.js` · 

The repetition to spot — same four lines, only the x values move:

```js
circle(100, 100, 80);
circle(80, 92, 10);
circle(120, 92, 10);
line(87, 116, 113, 116);
```

*Stretch:* make the eyes bigger on every face by changing one line. That's "change once, changed everywhere."


## Modulo + `for` loop introduction (20 min)

### Modulo (8 min)

`%` gives the **remainder** after division. `7 % 3` is `1`, because 3 goes into 7 twice with 1 left over.

Warm-up, no editor — pairs call out the answers:

1. `10 % 3` (1)
2. `9 % 3` (0)
3. `4 % 2` (0)
4. `5 % 2` (1)
5. `3 % 5` (3 — the trick one: 5 goes into 3 zero times, so all 3 is left over)

Two things modulo is good for:

- **Wrapping.** `n % 4` can only ever be 0, 1, 2, or 3, no matter how big `n` gets. They used this last week: `millis() % 6000` is what made the Traffic Light start over.
- **Every other / every nth.** `n % 2 == 0` is true for even numbers, `n % 3 == 0` for every third.

Make it visible:

```js
let n = floor(frameCount / 30); // counts up forever

n % 4      // only ever 0, 1, 2, 3
n % 2 == 0 // true, false, true, false ...
```


Ask: what's the biggest number that ever shows up on the right? Why never 4?

### `for` loop (12 min)

Start with the problem. Five circles, the copy-paste way:

```js
circle(50, 100, 40);
circle(125, 100, 40);
circle(200, 100, 40);
circle(275, 100, 40);
circle(350, 100, 40);
```

Ask: what changes from line to line? Only `x`, and it goes up by 75 each time. A function removed repetition by *naming* it; a loop removes repetition by *counting* it.

```js
for (let i = 0; i < 5; i++) {
  circle(50 + i * 75, 100, 40);
}
```


Anatomy — three parts inside the parentheses, separated by semicolons:

| Part | In the example | What it does |
| --- | --- | --- |
| start | `let i = 0` | make a counter; runs once |
| condition | `i < 5` | checked before every pass; when it's false, the loop stops |
| update | `i++` | runs after every pass; `i++` is short for `i = i + 1` |

Trace it on the board: `i` is 0 → draw at 50. `i` is 1 → draw at 125. … `i` is 4 → draw at 350. `i` is 5 → `5 < 5` is false, stop. The condition is the same kind of comparison as an `if`; the loop is an `if` that keeps asking.

Two things to say out loud:

- `i` is a local variable. It only exists inside the loop.
- The whole loop finishes inside a single frame of `draw()`. It's not animation — all five circles appear at once.

Put today's three ideas together — a loop calling a function, with modulo picking every other one:

```js
for (let i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    drawFace(50 + i * 100, 100, 80);
  } else {
    drawFace(50 + i * 100, 100, 40);
  }
}
```


*If there's time (solo, 3 min):* change one number so there are 12 faces across the same canvas. They'll need to touch the condition *and* the spacing — a good way to find out who understands what `i * 100` is doing.

*Mini-challenge:* swap `i % 2` for `i % 3` and predict the pattern before running it.

## Code files

| File | Used in |
| --- | --- |
| `01-review-conditionals-and-scope.js` | Quick review |
| `02-define-and-call.js` | Functions 2 |
| `03-parameters-drawFace.js` | Functions 3 |
| `04-return-area.js` | Functions 4 and 7 |
| `05-return-rollover-button.js` | Functions 4 |
| `06-map.js` | Functions 5 |
| `07-refactor-starter.js` / `07-refactor-solution.js` | Pair programming |
| `08-modulo.js` | Modulo |
| `09-for-loop.js` | `for` loop |
| `10-loop-function-modulo.js` | `for` loop, closing example |

## Tutorials

- [p5 Functions vs. User-Defined Functions](https://youtu.be/vPcoVHffsX0)
- [Argument and Parameters](https://youtu.be/73wLlJFWXQg)

For next week (today's last block is the introduction to these):

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
