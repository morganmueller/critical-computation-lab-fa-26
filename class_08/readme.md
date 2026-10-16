# Week 08: 10/16/2026

## Agenda

1. [Reading Reflection: Data Feminism](#reading-reflection-data-feminism)
2. [Assignment #6 [Part 1] Share-out](#assignment-6-part-1-share-out)
3. [Tutorial: Arrays](#tutorial-arrays)
4. [Walkthrough: From Numbered List to Data Portrait](#walkthrough-from-numbered-list-to-data-portrait)
5. [Mini Assignments](#mini-assignments)
6. [Assignment #6 [Part 2]](#assignment-6-part-2)
7. [Extra Review Materials](#extra-review-materials)
8. [Coding Glossary](#coding-glossary)

## Reading Reflection: Data Feminism

*Data Feminism* (MIT Press, 2020) by Catherine D'Ignazio and Lauren F. Klein. The full book is free to read on the [Data Feminism website](https://data-feminism.mitpress.mit.edu/).

### Notes

- **The core argument:** data is never neutral. Someone decides what to count, how to count it, who does the counting, and who benefits. Feminism here means paying attention to **power**: who has it, who doesn't, and how data work can reinforce or challenge it.
- **It's not only about gender.** The book draws on intersectional feminism, so it looks at race, class, disability, sexuality, and colonialism together, not one at a time.
- **The seven principles** (one per chapter):
  1. **Examine power** — ask who data science serves, and whose goals it reflects.
  2. **Challenge power** — use data to push back against unequal systems, not just describe them.
  3. **Elevate emotion and embodiment** — feeling and lived experience are forms of knowledge, not noise to be removed from a "clean" chart.
  4. **Rethink binaries and hierarchies** — question classification systems (like a two-box gender field on a form) that leave people out.
  5. **Embrace pluralism** — the most complete knowledge comes from many perspectives, especially local and community ones.
  6. **Consider context** — numbers don't speak for themselves. Where data came from and how it was collected changes what it means.
  7. **Make labor visible** — data work is done by people, often unseen and unpaid. Credit them.
- **Terms worth knowing:**
  - **Privilege hazard** — people in positions of privilege often can't see the problems that don't affect them, so the datasets and tools they build miss those problems too.
  - **Matrix of domination** (from sociologist Patricia Hill Collins) — a way of describing how power works at several levels at once: laws and institutions, culture, and everyday interactions.
  - **Missing data** — what *isn't* collected is a choice too. Artist Mimi Onuoha's *The Library of Missing Datasets* is a filing cabinet of folders for data that should exist but doesn't.
  - **Counterdata** — data collected by communities themselves when institutions won't, often to make a harm visible.
  - **Data visceralization** — data you experience with your body (sound, touch, scale, movement), not only by reading a chart.
- **Why this matters for your Data Portrait:** you are the institution now. You decide what counts as one data point, what gets left off the list, and what a viewer is allowed to see. Those are the same choices the book is about, at a personal scale.

### Discuss

Pick **one** and write three or four sentences.

1. Which principle from your article do you see most clearly in an app or system you use every day? Is it being followed or ignored?
2. When you tracked your habit for Part 1, what did you have to decide counted as "one"? What happened in a gray area (half a cup, a phone check you weren't sure about)?
3. What did your numbered list leave out that you think matters? Could your portrait show that missing part somehow?
4. A data portrait is about you, made by you. Does that avoid the problems the book describes, or just move them? Who is your audience, and what are you choosing to show them?

## Assignment #6 [Part 1] Share-out

In groups of 3, each person shares:

1. **The habit** you're tracking, and why you chose it.
2. **Your numbered list** so far (two days' worth).
3. **What one entry records.** Just a count? A time? A place, a mood, a reason?
4. **One rule you had to invent** while collecting. (When does an entry start or stop? What doesn't count?)

Keep your list open. By the end of the tutorial, you'll turn it into an array.

[Back to top](#agenda)

---

## Tutorial: Arrays

### In Class 8 Practice 1

Make a new sketch titled "In Class 8 Practice 1". Use a 600 × 600 canvas.

Here is a week of data: glasses of water per day.

| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Glasses | 4 | 6 | 3 | 8 | 5 | 7 | 2 |

- Store each day in its own variable.
- Draw a bar chart: one black bar per day, standing on the bottom of the canvas, 50 pixels tall per glass.

<details>
<summary>One possible solution</summary>

```js
let mon = 4;
let tue = 6;
let wed = 3;
let thu = 8;
let fri = 5;
let sat = 7;
let sun = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);

  rect(10, height - mon * 50, 70, mon * 50);
  rect(95, height - tue * 50, 70, tue * 50);
  rect(180, height - wed * 50, 70, wed * 50);
  rect(265, height - thu * 50, 70, thu * 50);
  rect(350, height - fri * 50, 70, fri * 50);
  rect(435, height - sat * 50, 70, sat * 50);
  rect(520, height - sun * 50, 70, sun * 50);
}
```

</details>

Now imagine 50 data points. Fifty variables, fifty `rect()` lines. Last week a loop fixed repeated *code*. Today an array fixes repeated *data*.

### What is an array?

An **array** is a list of values stored under one name. Square brackets, values separated by commas.

```js
let water = [4, 6, 3, 8, 5, 7, 2];
```

Think of it as your numbered list, typed into code. Each value sits in a numbered slot called an **index**.

| index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| value | 4 | 6 | 3 | 8 | 5 | 7 | 2 |

**Indexes start at 0, not 1.** The first item is `water[0]`. Your handwritten list starts at 1, so entry #1 on paper is index 0 in code.

### Reading a value

Put the index in square brackets after the array's name:

```js
water[0]; // 4  (Monday)
water[3]; // 8  (Thursday)
water[6]; // 2  (Sunday)
water[7]; // undefined — there is no 8th slot
```

### How long is it?

`.length` tells you how many items are in the array.

```js
water.length;                // 7
water[water.length - 1];     // 2 — the last item
```

The last index is always `length - 1`, because counting starts at 0.

### Changing a value

Same `=` as any variable, with the index in brackets:

```js
water[2] = 5; // Wednesday was actually 5
```

### Arrays can hold anything

Numbers, strings, colors. Each array should hold one *kind* of thing.

```js
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let moods = ["calm", "tired", "calm", "busy", "calm", "busy", "tired"];
```

### Arrays + `for` loops

Here's why arrays and loops belong together: a loop's counter `i` goes 0, 1, 2, 3 … and so do an array's indexes. Use `i` as the index.

```js
for (let i = 0; i < water.length; i++) {
  console.log(water[i]);
}
```

| Pass | `i` | `i < water.length`? | `water[i]` |
| --- | --- | --- | --- |
| 1 | 0 | true | 4 |
| 2 | 1 | true | 6 |
| … | … | … | … |
| 7 | 6 | true | 2 |
| — | 7 | false | loop stops |

Use `water.length` in the condition instead of typing `7`. Then the loop always runs exactly once per data point, however much data you add.

### Empty arrays and `push()`

You don't have to know your data ahead of time. Start with an **empty array** and add to the end with `push()`:

```js
let clicks = [];       // empty: length is 0

clicks.push(120);      // [120]
clicks.push(45);       // [120, 45]
clicks.length;         // 2
```

### In Class 8 Practice 2

Duplicate / Fork "In Class 8 Practice 1" and rename it "In Class 8 Practice 2".

- Replace the seven variables with one array.
- Replace the seven `rect()` lines with a `for` loop.

<details>
<summary>One possible solution</summary>

```js
let water = [4, 6, 3, 8, 5, 7, 2];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);

  for (let i = 0; i < water.length; i++) {
    let h = water[i] * 50;
    rect(10 + i * 85, height - h, 70, h);
  }
}
```

</details>

Now add an eighth number to the array. The new bar runs off the canvas. Can you fix it so the bars always fit, however many there are? (Hint: `width / water.length`.)

<details>
<summary>One possible solution</summary>

```js
let water = [4, 6, 3, 8, 5, 7, 2, 6];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);

  let barW = width / water.length;

  for (let i = 0; i < water.length; i++) {
    let h = water[i] * 50;
    rect(i * barW, height - h, barW - 10, h);
  }
}
```

</details>

### In Class 8 Practice 3: Your data

Make a new sketch titled "In Class 8 Practice 3".

- Type your Assignment #6 numbered list into an array. If each entry records more than one thing (a time *and* a place), make one array per thing, in the same order. Part 6 of the walkthrough shows how.
- Use a `for` loop to draw one shape per data point. Any shape, any layout. It doesn't have to look good yet.
- Add a comment above each array saying what one value means and what unit it's in.

[Back to top](#agenda)

---

## Walkthrough: From Numbered List to Data Portrait

Every sketch below is complete. Paste it into the [p5 editor](https://editor.p5js.org/), run it, and do the "Try it" before moving on.

### 1. Watch an array grow: click collector

Every click is a data point. `mousePressed()` pushes the mouse position into two arrays; the loop draws everything collected so far.

```js
let xs = [];
let ys = [];

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}

function draw() {
  background(240);
  noStroke();
  fill(120, 0, 120);

  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], 20);
  }

  fill(0);
  text(xs.length + " data points", 20, 30);
}
```

`xs[3]` and `ys[3]` belong together: they're the x and y of the 4th click. Two arrays in the same order, read with the same index, are called **parallel arrays**.

**Try it**

- Connect the dots with lines. Start the loop at `i = 1` and draw `line(xs[i - 1], ys[i - 1], xs[i], ys[i])`. Why start at 1?
- Add a `keyPressed()` that sets `xs = []` and `ys = []`. What happens?

### 2. From paper to code

Say you tracked every time you had coffee. Your numbered list might look like this:

```
1. 7:40   home
2. 11:15  studio
3. 15:30  cafe
4. 8:05   home
5. 13:00  cafe
...
```

Each line records two things, so it becomes two parallel arrays. Times become decimal hours: 7:40 is `7 + 40/60`.

```js
// hour of the day (0–24) for each coffee
let hours = [7 + 40/60, 11 + 15/60, 15 + 30/60, 8 + 5/60, 13];

// where I was, in the same order
let places = ["home", "studio", "cafe", "home", "cafe"];
```

Entry #1 on paper is `hours[0]` and `places[0]`. Keep the arrays the same length; check with `console.log(hours.length, places.length)`.

### 3. The same data, three ways

A bar chart is only one option. The examples below use the same `hours` array with more data in it.

#### A. A row of circles

```js
let hours = [7.7, 11.3, 15.5, 8.1, 13, 16.2, 7.9, 10.5, 14, 20.5];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  noStroke();
  fill(80, 50, 30);

  let spacing = width / hours.length;

  for (let i = 0; i < hours.length; i++) {
    let x = spacing / 2 + i * spacing;
    let y = map(hours[i], 0, 24, 50, height - 50); // morning high, night low
    circle(x, y, 30);
  }
}
```

#### B. A 24-hour clock

Each coffee becomes a dot on a ring. Midnight is at the top, like a clock face. `rotate()` inside `push()` / `pop()`, same as the Spokes sketch last week.

```js
let hours = [7.7, 11.3, 15.5, 8.1, 13, 16.2, 7.9, 10.5, 14, 20.5];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  translate(width / 2, height / 2);

  noFill();
  stroke(200);
  circle(0, 0, 400);

  noStroke();
  fill(80, 50, 30, 150);

  for (let i = 0; i < hours.length; i++) {
    let angle = map(hours[i], 0, 24, 0, TWO_PI);
    push();
    rotate(angle);
    circle(0, -200, 30);
    pop();
  }
}
```

The see-through fill matters: dots that land at the same time overlap and get darker, so you can see the habit cluster.

#### C. A grid, one cell per entry

`%` and `floor()` turn one counter into a row and a column. With 5 columns, entry 7 is in column `7 % 5 = 2`, row `floor(7 / 5) = 1`.

```js
let hours = [7.7, 11.3, 15.5, 8.1, 13, 16.2, 7.9, 10.5, 14, 20.5];
let cols = 5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  noStroke();

  let cell = width / cols;

  for (let i = 0; i < hours.length; i++) {
    let col = i % cols;
    let row = floor(i / cols);

    let shade = map(hours[i], 0, 24, 255, 0); // later = darker
    fill(shade);
    square(col * cell + 5, row * cell + 5, cell - 10);
  }
}
```

**Try it**

- In C, change `cols` to 3. Nothing else needs to change.
- In B, size each dot by `i` so later entries are bigger. What does that encode?
- Which of the three makes the habit easiest to read? Which is most interesting to look at? Are those the same one?

### 4. Categories with `if`

A string array can pick a color. This is the `places` array from part 2.

```js
let hours = [7.7, 11.3, 15.5, 8.1, 13, 16.2, 7.9, 10.5, 14, 20.5];
let places = ["home", "studio", "cafe", "home", "cafe", "studio", "home", "studio", "cafe", "home"];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  noStroke();

  let spacing = width / hours.length;

  for (let i = 0; i < hours.length; i++) {
    if (places[i] == "home") {
      fill(230, 120, 60);
    } else if (places[i] == "studio") {
      fill(60, 120, 230);
    } else {
      fill(60, 170, 90);
    }

    let x = spacing / 2 + i * spacing;
    let y = map(hours[i], 0, 24, 50, height - 50);
    circle(x, y, 40);
  }
}
```

Spelling counts: `"Home"` and `"home"` are different strings. If a circle comes out the wrong color, check the array.

### 5. Scaling to your data: `max()`

If your values run from 0 to 3, bars 50 pixels per unit look tiny. If they run to 40, they leave the canvas. `max()` finds the biggest value in an array, so you can `map()` from 0 to that.

```js
let steps = [3200, 8100, 5400, 12000, 6700, 9900, 2100];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);

  let biggest = max(steps);
  let barW = width / steps.length;

  for (let i = 0; i < steps.length; i++) {
    let h = map(steps[i], 0, biggest, 0, height - 50);
    rect(i * barW, height - h, barW - 10, h);
  }
}
```

The tallest bar always reaches the same height, whatever your units are.

### 6. Animating a data portrait

Assignment #6 has to animate. Two ways to start, both built from things you already know.

#### A. Reveal one entry at a time

The same trick as the grid reveal last week. `shown` counts up from 0 to the number of entries, then starts over.

```js
let hours = [7.7, 11.3, 15.5, 8.1, 13, 16.2, 7.9, 10.5, 14, 20.5];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  translate(width / 2, height / 2);
  noStroke();
  fill(80, 50, 30, 150);

  let shown = floor(frameCount / 20) % (hours.length + 1);

  for (let i = 0; i < shown; i++) {
    let angle = map(hours[i], 0, 24, 0, TWO_PI);
    push();
    rotate(angle);
    circle(0, -200, 30);
    pop();
  }
}
```

Played back like this, the portrait shows *order*, not just totals: you watch the days happen.

#### B. Hover to read

Your portfolio needs instructions for reading your portrait. Letting viewers hover to see the real value is one way to help. This is the In Class 7 hover check, inside an array loop.

```js
let water = [4, 6, 3, 8, 5, 7, 2];
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function setup() {
  createCanvas(600, 600);
  textSize(20);
}

function draw() {
  background(255);
  noStroke();

  let barW = width / water.length;

  for (let i = 0; i < water.length; i++) {
    let x = i * barW;
    let h = water[i] * 50;

    if (mouseX > x && mouseX < x + barW) {
      fill(120, 0, 120);
      text(days[i] + ": " + water[i] + " glasses", 20, 40);
    } else {
      fill(0);
    }
    rect(x, height - h, barW - 10, h);
  }
}
```

**Try it**

- In A, change `20` to `5`. Then make it stop on the full portrait instead of starting over. (Hint: `min()`, or an `if`.)
- In B, show the text next to the bar instead of in the corner.

### 7. When arrays go wrong

**Off by one, again.** `i <= water.length` runs one pass too many, and the last pass reads `water[7]`, which is `undefined`. p5 quietly skips shapes with `undefined` in them, so nothing crashes, but your math goes wrong. Use `<`.

**Missing comma.** `[4, 6 3, 8]` is an error. When you paste a long list, check the commas first.

**Parallel arrays out of sync.** If `hours` has 20 entries and `places` has 19, every color after the missing one is wrong. Print both lengths.

**Forgot the brackets.** `water * 50` doesn't work; `water[i] * 50` does. The array is the whole list. You almost always want one item from it.

[Back to top](#agenda)

---

## Mini Assignments

Ordered easiest to hardest.

### 1. Predict the array (no editor)

```js
let fruit = ["apple", "pear", "fig", "plum"];
```

- **a.** What is `fruit[1]`?
- **b.** What is `fruit.length`?
- **c.** What is `fruit[fruit.length - 1]`?
- **d.** What is `fruit[4]`?
- **e.** After `fruit.push("kiwi")`, what is `fruit.length`? What is `fruit[4]` now?
- **f.** After `fruit[0] = "lime"`, what is the whole array?

```js
// g
let nums = [3, 1, 4, 1, 5];
let total = 0;
for (let i = 0; i < nums.length; i++) {
  total = total + nums[i];
}
```

What is `total` after the loop? What is it after the 3rd pass?

### 2. A week in words (array of strings + loop)

```js
// A WEEK IN WORDS
// Goal: the seven days down the left side of the canvas,
// and one word for how each day felt next to it.

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function setup() {
  createCanvas(600, 600);
  textSize(32);
}

function draw() {
  background(250);

  // TODO 1: make a second array, feelings, with one word per day

  // TODO 2: use a for loop to draw days[i] and feelings[i]
  // on the same line, 70 pixels apart vertically

}
```

*Stretch:* make the text size of each feeling depend on its `length` (`feelings[i].length` works on strings too).

### 3. Limited clicks (empty array + `push()`)

Start from the click collector in part 1.

1. Stop collecting after 20 points. (Hint: wrap the `push()` lines in an `if` on `xs.length`.)
2. Show how many clicks are left.
3. When all 20 are used, change the background.

*Stretch:* store a third parallel array, `times`, with `millis()` for each click, and size each circle by how long you waited before clicking it.

### 4. Find the biggest (loop + `if`)

Don't use `max()` for this one. Write it yourself.

```js
// FIND THE BIGGEST
// Goal: a bar chart where the tallest bar is a different color.

let water = [4, 6, 3, 8, 5, 7, 2];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  // TODO 1: make a variable biggest, starting at water[0].
  // Loop through the array. If water[i] is bigger than biggest,
  // replace biggest with it.

  // TODO 2: draw the bar chart. If water[i] == biggest, use a
  // different fill.

}
```

*Stretch:* also find the smallest. Then turn your code into a function, `findBiggest(arr)`, that `return`s the answer.

### 5. Your data, three ways

Using your own Part 1 array, make three sketches that show the same data three different ways (like part 3 of the walkthrough). Each one must use a `for` loop and at least one `map()`.

At the top of each, write a one-sentence comment: **how should a viewer read this?** ("Each circle is one coffee; higher means earlier in the day.")

Then compare. Which way makes your habit look like more? Less? More regular? More chaotic? Same data each time.

### 6. Show your context (Data Feminism remix)

*Consider context* and *make labor visible* are two of the book's principles. Make your portrait carry something your numbers leave out.

1. Add a parallel array of short notes, one per entry: why it happened, who was there, what you were doing.
2. When the viewer hovers over a data point, show its note (part 6B).
3. Add one entry that you decided *not* to count while collecting, drawn differently from the rest (outlined, faded, crossed out). Write a comment saying why it didn't count.

You're welcome to grow this directly into your Assignment #6.

[Back to top](#agenda)

---

## Assignment #6 [Part 2]

Data Portrait, Part 2. Due Thursday 10/22.

1. Keep tracking until you have seven days of data (20 to 50 data points total).
2. Build it. Canvas size 600 × 600. Store your data in arrays and animate your portrait using any concepts from class.
3. On your CC Portfolio Assignment #6 page, include:
   - A description of your Data Portrait. What habit were you tracking?
   - Instructions for viewers on how to read it.
   - Your design process: your numbered list, plus any sketches or images that help explain it.
4. Reflect on:
   - What did you learn about yourself through self-tracking?
   - What was gained and what was lost by turning your habit into a visualization?

Submit to the CC Lab Canvas assignment and add it to your portfolio. Full brief: [Assignment #6 page](https://parsonsdt.github.io/critical-computation-2022/assignment-6.html).

Inspiration: [Dear Data](https://www.dear-data.com/theproject) by Giorgia Lupi and Stefanie Posavec, a year of hand-drawn data postcards about their own weeks.

## Extra Review Materials

- [Array, Empty Array, Arrays + for Loops](https://www.youtube.com/watch?v=g6MPsUfDw04)
- Bonus: [Pixel Array](https://youtu.be/7UXCT_LVFNo)
- Bonus: [clmtrkr.js (written tutorial)](https://parsonsdt.github.io/critical-computation-2021/assignment/8.html)
- Bonus: [Pixelator](https://www.youtube.com/watch?v=ENf9MXDj4hs&list=PLT233rQkMw76VnyIOIL--jMbd1NsPEkgB&index=1)
- Bonus: [Pointillist Filter](https://www.youtube.com/watch?v=aza-3oZjY4g&list=PLT233rQkMw76VnyIOIL--jMbd1NsPEkgB&index=2)
- [Data Feminism](https://data-feminism.mitpress.mit.edu/) (full book, free online)

## Coding Glossary

| Term | Meaning |
| --- | --- |
| array | a list of values stored under one name: `let a = [4, 6, 3];` |
| element / item | one value inside an array |
| index | an item's position in the array; starts at 0 |
| `a[i]` | the item at index `i` |
| `.length` | how many items are in the array |
| `a[a.length - 1]` | the last item |
| empty array | an array with nothing in it yet: `let a = [];` |
| `push()` | adds an item to the end of an array: `a.push(5);` |
| parallel arrays | two or more arrays in the same order, read with the same index |
| `max()` | returns the biggest number in an array |
| `undefined` | what you get when you read an index that doesn't exist |
| data point | one entry in your dataset: one line of your numbered list |

[Back to top](#agenda)