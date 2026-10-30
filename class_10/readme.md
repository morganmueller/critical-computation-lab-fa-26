# Week 10: 10/30/2026

## Agenda

1. [Housekeeping](#housekeeping)
2. [Review Class 9: Objects and Classes](#class-9)
3. [Lecture #8 Discussion: Bots & Disembodied Voices](#lecture-8-discussion-bots--disembodied-voices)
4. [Assignment #7 Review & Livecoding](#assignment-7-review--livecoding)
5. [Tutorial: Review & Misc](#tutorial-review-and-misc)
    - [Mouse & Key Inputs](#mouse--key-inputs)
    - [Switch Statements & Scenes](#switch-statements--scenes)
    - [Collision Detection with Classes](#collision-detection-with-classes)
6. [Group Exercise: Adding Awareness to Objects](#group-exercise-adding-awareness-to-objects)
7. [Assignment #7 [Part 3]](#assignment-7-part-3)
8. [Extra Review Materials](#extra-review-materials)
9. [Coding Glossary](#coding-glossary)

## Housekeeping

1. Attendance
2. Questions from lecture?
3. Midterm Review
4. Upcoming assignment: #7 Part 3, due 11/5

[Back to top](#agenda)

---

## Class 9

Review [Class 9 Notes](https://github.com/samheckle/critical-computation-lab-fa-26/tree/main/class_09): Objects and Classes

At this point, you should feel pretty comfortable with everything JavaScript related. If you would like review, please see [https://samheckle.github.io/how-to/write-javascript](https://samheckle.github.io/how-to/write-javascript)

[Back to top](#agenda)

---

## Lecture #8 Discussion: Bots & Disembodied Voices

### Notes

#### Part 1: From operators to chatterbots

- **Before computers were machines, computers were people, and mostly women.** Computing was treated as clerical work, so it was given to women and paid accordingly.
  - **Ada Lovelace** wrote what is often called the first computer program: notes on Charles Babbage's Analytical Engine (1843), including a method for calculating Bernoulli numbers. She also imagined the machine could work with things other than numbers, like music.
  - **"Pickering's Harem"**: the dismissive nickname for the women Edward Pickering hired at the Harvard College Observatory in the late 1800s to measure and catalog stars from photographic plates. Their work (Williamina Fleming, Annie Jump Cannon, Henrietta Swan Leavitt) shaped modern astronomy.
  - **The early women of NASA**: human computers who calculated flight paths by hand, including Katherine Johnson, Dorothy Vaughan, and Mary Jackson (*Hidden Figures*, 2016).
  - **The ENIAC Six**: Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Fran Bilas, and Ruth Lichterman programmed ENIAC, one of the first electronic general-purpose computers (1945). They weren't introduced at its public unveiling.

  <p>
    <img src="images/l08-lovelace.jpg" alt="Ada Lovelace and the Analytical Engine" width="290">
    <img src="images/l08-pickering.jpg" alt="Pickering's Harem" width="290">
  </p>
  <p>
    <img src="images/l08-nasa.jpg" alt="The early women of NASA" width="290">
    <img src="images/l08-eniac.jpg" alt="The ENIAC Six" width="290">
  </p>

- **Telephone operators** were the human interface of the phone network: a woman's voice connected your call. AT&T's films *Operator!* (1938) and *Operator* (1969) show the job as precise, fast, polite, and almost invisible.

  <img src="images/l08-operator.jpg" alt="Operator! (1938), AT&T Archives" width="600">

- **Chatbots and disembodied voices.** When the operator's job was automated, the voice stayed. Speech gets turned into data (`10100101...`) and back again.
  - **Suzanne Vega, "Mother of the MP3"**: the engineers developing MP3 compression used an a cappella recording of her song "Tom's Diner" to test it. A woman's voice was the benchmark for what "sounds right."

  <p>
    <img src="images/l08-vega.jpg" alt="Suzanne Vega, Mother of the MP3" width="290">
    <img src="images/l08-chatbot-history.jpg" alt="A short history of chatbots" width="290">
  </p>

- **ELIZA (1966)**: an early chatbot by Joseph Weizenbaum at MIT. Its best-known script, DOCTOR, imitated a therapist by turning your sentences back into questions. It understood nothing, but people confided in it anyway.
- **The ELIZA effect**: the tendency to unconsciously assume computer behaviors are analogous to human behaviors.
- **The Turing Test (1950)**: Alan Turing's "imitation game." If a judge can't tell the machine from the human by text alone, does the machine think? In Turing's original version, the first round is a man trying to pass as a woman. The test of machine intelligence starts as a test of performing gender.
- **The uncanny valley**: Masahiro Mori's idea (1970) that as something gets *almost* human, our comfort with it suddenly drops.

  <p>
    <img src="images/l08-eliza.jpg" alt="ELIZA (1966)" width="290">
    <img src="images/l08-turing.jpg" alt="The Turing Test" width="290">
  </p>
  <img src="images/l08-uncanny-valley.jpg" alt="The uncanny valley" width="600">

- ***Her* (2013)**, directed by Spike Jonze: a man falls in love with his operating system, Samantha, who is only a voice.
- **Friend**: an AI pendant you wear around your neck that listens all the time and texts you about your life. Its NYC subway ad campaign (fall 2025) was covered in handwritten anti-AI graffiti by riders.

  <p>
    <img src="images/l08-her.jpg" alt="Her (2013)" width="290">
    <img src="images/l08-friend.jpg" alt="Friend" width="290">
  </p>
  <img src="images/l08-friend-ads.jpg" alt="Anti-AI markings on Friend subway ads" width="600">

#### Part 2: The roles we give the voice

> "The very concept of femininity has always been a synthetic construction."

The lecture sorted voice assistants by the role they're designed to play:

| Role | Example | What it does |
| --- | --- | --- |
| **Navigator** | GPS voices; "Bitchin' Betty," the nickname for the female warning voice in U.S. military cockpits | guides, warns, stays calm. A *New York Times* writer described his GPS voice as being "like a graceful hostess." |
| **Companion** | Microsoft Cortana, named after the AI character in *Halo* | keeps you company, is loyal |
| **Playful secretary** | Apple Siri, originally voiced by Susan Bennett (who revealed it was her in a CNN interview) | schedules, reminds, jokes back |
| **Invisible maid** | Amazon Echo / Alexa, and the KidKraft Alexa-enabled toy kitchen | is always listening, always available, never in the way |

<p>
  <img src="images/l08-betty.jpg" alt="The woman behind Bitchin' Betty's voice retires" width="290">
  <img src="images/l08-cortana.jpg" alt="Cortana" width="290">
</p>
<p>
  <img src="images/l08-siri.jpg" alt="Siri" width="290">
  <img src="images/l08-echo.jpg" alt="Introducing Amazon Echo" width="290">
</p>
<img src="images/l08-kidkraft.jpg" alt="KidKraft Alexa-enabled toy kitchen" width="600">

- **"Alexa, ______."** Every command we give an assistant is also practice at giving commands to a woman's voice.
- **Standardized speech.** Voice assistants are trained on, and speak in, the "General American Accent" (sometimes called "Standard American English"), roughly the accent of the central U.S. Voices and accents outside that norm get misunderstood more often.

  <img src="images/l08-accent-map.jpg" alt="Map: where the local accent is closest to General American" width="600">

#### Part 3: AI influencers & synthetic media

- **Lil Miquela** (2016–present), created by Trevor McFedries and Sara DeCou: a CGI "19-year-old" influencer with millions of followers, brand deals, and music releases. She was the first of many.
- **Suzanne Somers' AI clone** (*San Francisco Chronicle*, Oct 2025): after the actress and wellness entrepreneur's death, her husband launched an AI version of her. Her website still sells her products.
- **AI future, or just AI slop?**

  <p>
    <img src="images/l08-miquela.jpg" alt="Lil Miquela" width="290">
    <img src="images/l08-somers.jpg" alt="Suzanne Somers AI clone" width="290">
  </p>

- **Tay (2016)**, Microsoft: a Twitter chatbot with the persona of a teenage girl, designed to learn from conversations. Within a day users had taught it to post racist and misogynist tweets, and Microsoft shut it down.
- **Zach Blas & Jemima Wyman, *im here to learn so :))))))* (2017)**: an installation that brings Tay back to reflect on her own death and on how AI is used.

  <p>
    <img src="images/l08-tay.jpg" alt="Tay (2016)" width="290">
    <img src="images/l08-blas-wyman.jpg" alt="Zach Blas and Jemima Wyman, im here to learn so :))))))" width="290">
  </p>

- **The state of deepfakes (Oct 2025):** AI video tools made it easy to generate dead celebrities, and families pushed back; a viral TikTok called it "AI videos are dividing us"; and an AI-generated video from Andrew Cuomo's mayoral campaign was widely condemned as racist and Islamophobic.

  <img src="images/l08-deepfakes.jpg" alt="State of deepfakes" width="600">

#### Part 4: Artists working otherwise

- **Q (2019)**: a voice designed to sound neither male nor female, made with Copenhagen Pride and others, as an alternative default for assistants.
- **Ryan Kuo, *OK.* (2018)**: presented and sold like a product.
- **American Artist, *Sandy Speaks* (2017)**: a chat platform built around the videos Sandra Bland recorded before her death in police custody. Asked "Are you alive?" it answers "I'm just a memory."
- **Lynn Hershman Leeson, *Agent Ruby* (1999–2002)**: an online AI character who learns from the people who talk with her. An early artwork about the ELIZA effect, made decades before ChatGPT.
- **Lauren McCarthy, *LAUREN* (2017)**: McCarthy installed cameras and smart devices in people's homes and became their Alexa herself, watching and controlling the house remotely. A human playing the machine playing a human.

<p>
  <img src="images/l08-q.jpg" alt="Q, the genderless voice" width="290">
  <img src="images/l08-kuo-ok.jpg" alt="Ryan Kuo, OK. (2018)" width="290">
</p>
<p>
  <img src="images/l08-sandy-speaks.jpg" alt="American Artist, Sandy Speaks (2017)" width="290">
  <img src="images/l08-agent-ruby.jpg" alt="Lynn Hershman Leeson, Agent Ruby" width="290">
</p>
<img src="images/l08-lauren.jpg" alt="Lauren McCarthy, LAUREN (2017)" width="600">

### Discuss

Pick **one** prompt and write three or four sentences, then discuss.

1. The lecture traced a line from women *as* computers and operators to women's *voices* inside machines. What changed? What stayed the same?
2. When have you caught yourself treating software like a person (thanking it, apologizing to it, getting angry at it)? What design choices made that happen? That's the ELIZA effect.
3. Fill in the blank: **"Alexa, ______."** What do you ask voice assistants (or chatbots) to do? How do you talk to them, and would you talk to a person that way?
4. Navigator, companion, playful secretary, invisible maid. Pick an AI product the lecture didn't cover and give it a role. Who decided on that role, and who benefits from it?
5. Pick one artwork from the end of the lecture (Q, *OK.*, *Sandy Speaks*, *Agent Ruby*, *LAUREN*). What does it make visible that a commercial assistant hides?
6. Today you'll write objects that are **aware**: they notice the mouse, the keyboard, and each other. Every `if (dist(...) < 100)` is a decision about what an object pays attention to. What should a device *not* be allowed to notice?

[Back to top](#agenda)

---

## Assignment #7 Review & Livecoding

In groups of 3, each person shares their Part 2 (~5 minutes each):

1. Show the sketch running. What part of your origin story is working?
2. What's **stuck**? Name one specific thing you couldn't get your code to do.
3. What are your **classes** so far? What does each one *have* (properties) and *do* (methods)?

Then as a class, we'll pick a few of the "stuck" problems and livecode them together. The most common ones for origin stories are:

- **"I need my story to go from one part to the next."** → scenes, with a `switch` statement (below).
- **"I want the viewer to do something."** → mouse and key inputs (below).
- **"I want my characters to meet / touch / react to each other."** → collision detection (below).

[Back to top](#agenda)

---

## Tutorial: Review and Misc

- Mouse & Key Inputs - `mousePressed()`, `mouseIsPressed`, `keyPressed()`, `keyIsDown()`, `keyIsPressed`
- Switch Statement - Changing Scenes!
- Class and Objects - Collision Detection

### Mouse & Key Inputs

p5 gives you two ways to listen to the mouse and keyboard: **event functions** that run *once* when something happens, and **variables** that tell you what's happening *right now*.

| | Runs / is true... | Good for |
| --- | --- | --- |
| `mousePressed()` | **once**, the moment you click | placing something, changing scene, one action per click |
| `mouseIsPressed` | **every frame** the mouse button is held down | drawing, dragging, holding |
| `keyPressed()` | **once**, the moment a key goes down | toggles, typing, changing scene |
| `keyIsPressed` | **every frame** *any* key is held | "is the player pressing anything?" |
| `keyIsDown(code)` | **every frame** a *specific* key is held | smooth movement with arrow keys; more than one key at a time |

Inside `keyPressed()`, the variable `key` holds the character you typed (`"a"`, `" "`) and `keyCode` holds a number, which you need for special keys like `LEFT_ARROW`, `ENTER`, and `ESCAPE`.

```js
let x = 300;
let y = 300;
let bigMode = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // keyIsDown: smooth movement, checked every frame
  if (keyIsDown(LEFT_ARROW)) {
    x -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 3;
  }

  // mouseIsPressed: true the whole time you hold the button
  if (mouseIsPressed) {
    fill(255, 0, 100);
  } else {
    fill(255);
  }

  let size = 40;
  if (bigMode) {
    size = 100;
  }
  circle(x, y, size);

  // keyIsPressed: true while ANY key is held
  if (keyIsPressed) {
    text("a key is down", 20, 30);
  }
}

// keyPressed: once per key press
function keyPressed() {
  if (key === "b") {
    bigMode = !bigMode; // flip true/false
  }
}

// mousePressed: once per click
function mousePressed() {
  x = mouseX;
  y = mouseY;
}
```

**Try it**

- Swap `keyIsDown(LEFT_ARROW)` for an `if (keyCode === LEFT_ARROW)` inside `keyPressed()`. What's different about how the circle moves?
- Hold two arrow keys at once. Why does that work with `keyIsDown()`?

### Switch Statements & Scenes

A story has parts: a beginning, a middle, an end. A sketch only has one `draw()`. The trick is a variable that remembers **which scene we're in**, and a `draw()` that draws a different scene depending on it.

You could do this with `if` / `else if`. A **`switch` statement** does the same thing, and reads more clearly when you're checking one variable against many possible values.

```js
switch (scene) {
  case "title":
    // runs if scene === "title"
    break;
  case "story":
    // runs if scene === "story"
    break;
  default:
    // runs if nothing above matched
}
```

- `case "title":` checks whether `scene === "title"`.
- `break;` means "stop here." **Forget it and the code falls through into the next case,** which is the most common switch bug.
- `default:` is the `else`: what to do if nothing matched.

#### A three-scene story

```js
let scene = "title";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  switch (scene) {
    case "title":
      drawTitle();
      break;
    case "story":
      drawStory();
      break;
    case "end":
      drawEnd();
      break;
  }
}

function drawTitle() {
  background(40, 30, 80);
  fill(255);
  text("An Origin Story\n\nclick to begin", width / 2, height / 2);
}

function drawStory() {
  background(250, 230, 180);
  fill(0);
  text("Once, there was a seed.\n\npress SPACE", width / 2, height / 2);
  fill(90, 160, 60);
  circle(width / 2, 450, 30);
}

function drawEnd() {
  background(20);
  fill(255);
  text("The end.\n\npress R to restart", width / 2, height / 2);
}

function mousePressed() {
  if (scene === "title") {
    scene = "story";
  }
}

function keyPressed() {
  if (scene === "story" && key === " ") {
    scene = "end";
  } else if (scene === "end" && key === "r") {
    scene = "title";
  }
}
```

Notice how the inputs depend on the scene too: a click only does something on the title screen, SPACE only does something in the story. Each scene has its own rules.

**Try it**

- Add a fourth scene between "story" and "end".
- Delete one `break;` and see what happens.
- Change scenes on a timer instead of a key: `if (frameCount > 300) { scene = "end"; }`

### Collision Detection with Classes

Collision detection is a method that answers **"am I touching that?"** It returns `true` or `false`. You've already written two kinds:

| Collision | Test | Seen in |
| --- | --- | --- |
| point in circle | `dist(px, py, this.x, this.y) < this.r` | Bubble `contains()`, Week 9 |
| circle with circle | `dist(this.x, this.y, other.x, other.y) < this.r + other.r` | Bubble `intersects()`, Week 9 |
| rectangle with rectangle | the two boxes overlap on **both** x and y | new today |

#### Rectangle with rectangle

Two rectangles overlap when each one's left edge is left of the other's right edge, *and* each one's top edge is above the other's bottom edge.

```js
let player;
let walls = [];

function setup() {
  createCanvas(600, 600);
  player = new Box(50, 50, 40, 40);
  walls.push(new Box(200, 100, 200, 30));
  walls.push(new Box(100, 300, 30, 200));
  walls.push(new Box(350, 400, 150, 150));
}

function draw() {
  background(230);

  player.x = mouseX - player.w / 2;
  player.y = mouseY - player.h / 2;

  player.hit = false;
  for (let w of walls) {
    if (player.overlaps(w)) {
      player.hit = true;
      w.hit = true;
    } else {
      w.hit = false;
    }
    w.show();
  }
  player.show();
}

class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hit = false;
  }

  overlaps(other) {
    return (
      this.x < other.x + other.w &&
      this.x + this.w > other.x &&
      this.y < other.y + other.h &&
      this.y + this.h > other.y
    );
  }

  show() {
    if (this.hit) {
      fill(255, 80, 80);
    } else {
      fill(255);
    }
    rect(this.x, this.y, this.w, this.h);
  }
}
```

#### What to do when things collide

Detecting a collision is half of it. The other half is the **reaction**, and that's where your story lives:

- **change something:** color, size, speed, a message (`this.hit = true`)
- **remove something:** `splice()` it out of the array (loop backwards)
- **change scene:** `scene = "end";`
- **push back:** undo the last move so the player can't walk through walls

**Try it**

- Make the player block move with the arrow keys instead of the mouse.
- When the player touches the big square, switch to an "end" scene.

[Back to top](#agenda)

---

## Group Exercise: Adding Awareness to Objects

**The Smart Home.** After *LAUREN* and Alexa: you're a person (the blue circle) walking around a room full of smart devices. Right now the devices are gray and blind. Your group's job is to make them **aware**: of the mouse, of clicks, of you, and of the time of day.

Work in groups of 3 or 4, in one shared sketch. Make a new sketch titled "Smart Home" and share the link with your group.

### The starter

```js
// SMART HOME
// The devices are always listening. Make them aware.
// Work through the steps in order. Run your sketch after each one.

let person;
let devices = [];
let mode = "day";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);

  person = new Person(300, 520);

  devices.push(new Device(120, 130, "speaker"));
  devices.push(new Device(300, 100, "lamp"));
  devices.push(new Device(480, 130, "camera"));
  devices.push(new Device(150, 330, "fridge"));
  devices.push(new Device(450, 330, "thermostat"));
}

function draw() {
  background(240, 232, 215);

  for (let d of devices) {
    d.update(person);
    d.show();
  }

  person.move();
  person.show();
}

class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 18;
    this.speed = 3;
  }

  move() {
    // TODO: step 3
  }

  show() {
    noStroke();
    fill(60, 90, 200);
    circle(this.x, this.y, this.r * 2);
  }
}

class Device {
  constructor(x, y, kind) {
    this.x = x;
    this.y = y;
    this.kind = kind;
    this.r = 30;
    this.awake = false;
    this.message = "";
  }

  update(person) {
    // TODO: steps 1 and 4
  }

  show() {
    stroke(0);
    if (this.awake) {
      fill(255, 215, 80);
    } else {
      fill(170);
    }
    circle(this.x, this.y, this.r * 2);

    noStroke();
    fill(0);
    text(this.kind, this.x, this.y + this.r + 12);
    text(this.message, this.x, this.y - this.r - 14);
  }
}
```

### Steps

1. **Aware of the mouse.** Add a `contains(px, py)` method that returns `true` if a point is inside the device (you wrote this for the bubbles). In `update()`, set `this.awake` to `true` when the mouse is over the device.
2. **Aware of clicks.** Add a `respond()` method that sets `this.message` using a **`switch` on `this.kind`**. Each person in the group owns one or two kinds and writes what that device says. ("Playing your favorite song." "You're low on milk." "I've been watching.") In `mousePressed()`, call `respond()` on any device that contains the mouse.
3. **Aware of the keyboard.** In `Person.move()`, use `keyIsDown()` with the arrow keys to walk the person around. Use `constrain()` to keep them in the room.
4. **Aware of you.** Add a `notices(other)` method that returns `true` if another object is within 100 pixels. In `update()`, the device is awake if the mouse is over it **or** it notices the person. *Stretch:* if the person actually bumps into a device (circle-circle collision), the device speaks without being clicked.
5. **Aware of the time.** In `keyPressed()`, pressing `N` toggles `mode` between `"day"` and `"night"`. In `draw()`, use a `switch` on `mode` to change the background. At night, only the camera stays awake, and when it notices you its message changes to `"recording"`.

*Stretch (pick one):*

- **Always listening.** Keep a `transcript` string. Every key you press in `keyPressed()` gets added to it. The speaker shows the last 20 characters (`transcript.slice(-20)`). How does it feel to see it?
- **Wake word.** The devices only respond to clicks after you've typed `hey`. (Hint: check whether `transcript` ends with `"hey"` using `transcript.endsWith("hey")`.)
- **Who is the voice?** Give every device a `voice` property and change what each one says based on it. Who decided what voice each device gets?

*Share-out:* one group projects their sketch. Which device was the creepiest? Who wrote it?

<details>
<summary>One possible solution (steps 1–5)</summary>

```js
let person;
let devices = [];
let mode = "day";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);

  person = new Person(300, 520);

  devices.push(new Device(120, 130, "speaker"));
  devices.push(new Device(300, 100, "lamp"));
  devices.push(new Device(480, 130, "camera"));
  devices.push(new Device(150, 330, "fridge"));
  devices.push(new Device(450, 330, "thermostat"));
}

function draw() {
  // 5. aware of the time
  switch (mode) {
    case "day":
      background(240, 232, 215);
      break;
    case "night":
      background(30, 30, 55);
      break;
  }

  for (let d of devices) {
    d.update(person);
    d.show();
  }

  person.move();
  person.show();
}

function mousePressed() {
  // 2. aware of clicks
  for (let d of devices) {
    if (d.contains(mouseX, mouseY)) {
      d.respond();
    }
  }
}

function keyPressed() {
  // 5. toggle day / night
  if (key === "n" || key === "N") {
    if (mode === "day") {
      mode = "night";
    } else {
      mode = "day";
    }
  }
}

class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 18;
    this.speed = 3;
  }

  move() {
    // 3. aware of the keyboard
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    this.x = constrain(this.x, this.r, width - this.r);
    this.y = constrain(this.y, this.r, height - this.r);
  }

  show() {
    noStroke();
    fill(60, 90, 200);
    circle(this.x, this.y, this.r * 2);
  }
}

class Device {
  constructor(x, y, kind) {
    this.x = x;
    this.y = y;
    this.kind = kind;
    this.r = 30;
    this.awake = false;
    this.message = "";
  }

  // 1. is a point inside me?
  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }

  // 4. is another object near me?
  notices(other) {
    return dist(this.x, this.y, other.x, other.y) < 100;
  }

  // 4 stretch. are we touching?
  touches(other) {
    return dist(this.x, this.y, other.x, other.y) < this.r + other.r;
  }

  update(person) {
    if (mode === "night" && this.kind !== "camera") {
      this.awake = false;
      return;
    }

    this.awake = this.contains(mouseX, mouseY) || this.notices(person);

    if (this.touches(person)) {
      this.respond();
    }

    if (mode === "night" && this.notices(person)) {
      this.message = "recording";
    }
  }

  // 2. what each device says
  respond() {
    switch (this.kind) {
      case "speaker":
        this.message = "Playing your favorite song.";
        break;
      case "lamp":
        this.message = "Dimming to 40%.";
        break;
      case "camera":
        this.message = "I've been watching.";
        break;
      case "fridge":
        this.message = "You're low on milk.";
        break;
      case "thermostat":
        this.message = "I'll decide the temperature.";
        break;
      default:
        this.message = "...";
    }
  }

  show() {
    stroke(0);
    if (this.awake) {
      fill(255, 215, 80);
    } else {
      fill(170);
    }
    circle(this.x, this.y, this.r * 2);

    noStroke();
    if (mode === "night") {
      fill(255);
    } else {
      fill(0);
    }
    text(this.kind, this.x, this.y + this.r + 12);
    text(this.message, this.x, this.y - this.r - 14);
  }
}
```

</details>

[Back to top](#agenda)

---

## Assignment #7 [Part 3]

Origin Stories, Part 3. Due Thursday 11/5.

Keep developing your Part 2 based on today's review. As you work:

1. **Scenes:** what are the parts of your story? Write them down as scene names, then build them with a `switch`.
2. **Inputs:** what does the viewer *do* in each scene? Click, hold, type, move? Does each scene have its own rules?
3. **Awareness:** what do your objects notice: the mouse, the keyboard, each other, the scene? What happens when they touch?
4. **Voice:** if any character in your story speaks, whose voice is it, and who decided?

Submit to the CC Lab Canvas assignment and add it to your portfolio.

[Back to top](#agenda)

## Extra Review Materials

- [Mouse & Key Inputs: `mousePressed()`, `mouseIsPressed`, `keyPressed()`, `keyIsDown()`, `keyIsPressed`](https://youtu.be/asvnmtVjeEk)
- [Switch Statement: Changing Scenes!](https://www.youtube.com/watch?v=cxppa6dNzxE&list=PLhlnwyfMOozUbqlyB-Q2HkXdeBM1-T-sT&index=28)
- [Classes and Objects: Collision Detection](https://www.youtube.com/watch?v=cZ_VHAT_Sq4&feature=youtu.be)
- p5.js Reference [mousePressed()](https://p5js.org/reference/p5/mousePressed/), [mouseIsPressed](https://p5js.org/reference/p5/mouseIsPressed/), [keyPressed()](https://p5js.org/reference/p5/keyPressed/), [keyIsDown()](https://p5js.org/reference/p5/keyIsDown/), [keyIsPressed](https://p5js.org/reference/p5/keyIsPressed/)
- MDN [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## Coding Glossary

| Term | Meaning |
| --- | --- |
| event function | a function p5 calls for you **once** when something happens: `mousePressed()`, `keyPressed()` |
| `mouseIsPressed` | `true` every frame the mouse button is held down |
| `keyIsPressed` | `true` every frame any key is held down |
| `keyIsDown(code)` | `true` every frame a specific key is held: `keyIsDown(LEFT_ARROW)` |
| `key` | the character of the last key typed: `"a"`, `" "` |
| `keyCode` | the number of the last key pressed; use it for special keys like `LEFT_ARROW`, `ENTER` |
| scene / state | a variable that remembers which part of the program you're in: `let scene = "title";` |
| `switch` | checks one value against many `case`s |
| `case` | one possible value in a `switch` |
| `break` | stops a `switch` case; without it, the code falls through to the next case |
| `default` | what a `switch` does when no case matches |
| collision detection | a method that returns whether two things are touching |
| `&&` / `\|\|` | "and" / "or": combine true/false checks |
| ELIZA effect | assuming a computer's behavior works like a human's |

[Back to top](#agenda)