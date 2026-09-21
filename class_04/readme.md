

# Week 04: 9/17/2026

## Agenda

1. Lecture Discussion
2. Tutorial: Variables and Movement
3. Assignment #2 [Part 1]
4. References, Useful Links, and Demos

## Lecture Discussion

Let's break down ["Dancing with Systems" by Donella Meadows](https://donellameadows.org/dancing-with-systems/):

1. Get the beat.
2. Listen to the wisdom of the system.
3. Expose your mental models to the open air.
4. Stay humble. Stay a learner.
5. Honor and protect information.
6. Locate responsibility in the system.
7. Make feedback policies for feedback systems.
8. Pay attention to what is important, not just what is quantifiable.
9. Go for the good of the whole.
10. Expand time horizons.
11. Expand thought horizons.
12. Expand the boundary of caring.
13. Celebrate complexity.
14. Hold fast to the goal of goodness.

We will divide into 3 groups:

- Group 1: Steps 1-5
- Group 2: Steps 6-10
- Group 3: Steps 11-14

And discuss the following questions:
- What are the core takeaways of the section for your group?
- What is your understanding of the section's importance and implication?
- Has this revealed anything about your engagement with a system? Talk about some examples.

## Variables and Movement

### Coding Glossary

| Generic Definitions |                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------- |
| expression          | a unit of code that resolves to a value, eg. `1 + 3`                                     |
| operator            | syntax for expression, eg. in the above expression the operator is `+`                   |
| variable            | name for placeholder piece of data                                                       |
| declaration         | uses the keyword `let` to give a variable a name                                         |
| assignment          | gives a value to a variable name using `=`                                               |
| camel case          | the first letter of the first word is lowercase, and every word after that has uppercase |
| scope               | where variables exist. can be global or local inside `{}`                                |

#### Operators

There are many different types of operators, which you can read up [the full list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators).

The two most important types of operators (for now):

1. assignment, ie `=`
2. arithmetic, ie `+`, `-` (math)

#### Variables and Declaration

In order to "assign" or "make this word equal to a piece of data", we `declare` a variable. `let` is the keyword we use here to tell the code, "hey, the next word is going to represent some value".

```js
let myVariable;
```

##### `let` vs `var` vs `const`

We basically always will use `let` because it is the modern way of coding (circa 2016). You shouldn't really be using `const` or `var`, and these are usually flags for getting code from elsewhere.

#### Assignment Operator

Assignment happens when we give that named variable a value using the `=`.

```js
let teacher = "morgan";
```

![variable](https://p5js.org/_astro/assignment-diagram.DqAaH9Oz_Z60CJI.png)
#### Variable Types

JavaScript isn't specific about different variable types, but we do know when p5 accepts variables as parameters in functions it will be either a "Number" or "String".

- `Number` is like 1,2,3,4,5
- `String` is a word, but wrapped in `""`
- `Boolean` is either `true` or `false`

#### Variable Names

When creating variable names, we can pretty much use whatever we want, but being specific helps us and readers of our code to understand what is happening.

There is one restriction: you cannot use words that already exist in p5. These are called `reserved words` and will often throw an error.
You might have seen red squiggly lines under some of your code, this means something is wrong.

![reserved](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_02/reserved.png?raw=true)

If we hover over the word, it will give us some information.  

![reserved_error](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_02/reserved_error.png?raw=true)

`'draw' has already been declared` means that we are either using the same variable name twice, or that we are infringing on a reserved word.

Typical naming convention in JavaScript is to use `camel case`, which just means the first letter of the first word is lowercase, and every word after that has uppercase. There should be no spaces in variable names.

```js
let mySuperCoolVariableThatUsesCamelCase = "nice";
```

### Built-in Variables

There are a couple of variables that are built into `p5.js`. We can reference these *after the canvas is created* to get information that `p5.js` allows us access to.

```js
width // the size of the canvas on the x-axis
height // the size of the canvas on the y-axis
mouseX // the position of the mouse on the x-axis
mouseY // the position of the mouse on the y-axis
key // character typed on keyboard
```

See the [search for "variable"](https://p5js.org/search/?term=variable) for a full list.

### Tutorial: Animation

Everything following this tutorial is specific to p5, but doesn't necessarily require the glossary. But just so you know, everything mentioned in the tutorial is not generic.

We can animate in p5 using math and applying it to variables.

![movement](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_02/movement.gif?raw=true)

The ball is moving at a rate of 20 pixels to the _right_ **_every frame_**. Every frame means the `draw`. So we can calculate that the position is moving `+20` on the x-axis.
This position needs to change over time!

| frame number | x position|
|---|---|
| 1 | 20 |
| 2 | 40 |
| 3 | 60 |

But how can we make a number that with every frame needs to increase by 20?  
By using a variable and a combination of arithmatic and assignment operators.

1. We need to create a variable to store the first frame position.

```js
let x = 20;
```

This will represent the location of the circle for the first frame.

```js
circle(x, 20, 30);
```

2. In order to increment `x`, we need to increase the number...

```js
x + 20;
```

...but we also need to assign it to that new number. We are overriding the previous value of x with this new updated value.

```js
x = x + 20;
```

3. Any movement needs to happen in the `draw()`, because that is the animation loop.

```js
let x = 20;

function draw() {
  background(225);
  circle(x, 20, 30);
  x = x + 30;
}
```

The reason the declaration of the variable x (ie `let x = 20`) happens before the loop is because it will override any changes that happen inside the loop and motion wouldn't happen. So we need the variable to be `global`, or outside of both the `setup()` and the `draw()`. This gets into scope.

### Scope

Scope is where code can "see" variables. It is defined within different `{}`. So the `setup()` has a scope that is different from the `draw()`. Global means that variables exist inside the entire file and are not limited by the `{}`.

### Randomness

[`random()` p5 reference](https://p5js.org/reference/p5/random/)
We can incorporate randomness into our sketches by using `random()`. For now, randomness can take 2 parameters

```js
random([min], [max]);
```

These are numbers, with inclusive minimum and exclusive maximum. If you don't pass in a number it will generate a long decimal between 0 and 1.

Usually with randomness we want round numbers, so we can use `floor()` to round the number down.

```js
let randNumber = random();
randNumber = floor(randNumber);
```
## Basic Interaction with `mousePressed()` and `keyPressed()`

We mentioned `mouseX` and `mouseY` as built-in variables that get input of the mouse interaction. `mousePressed()` determines whether the *canvas* has been clicked. 

```js
// global scope variables
let xPos = 10
let yPos = 10

// when the canvas is clicked, change the position to the current mouse position
function mousePressed(){
	xPos = mouseX
	yPos = mouseY
}
```

`keyPressed()` allows us to receive character key data from the keyboard

```js
let typed = ''

// when the keyboard is typing, add the characters to the global variable
function keyPressed(){
	typed += key
}
```

## References, Useful Links, and Demos

In Class Demos
- [Dice Roller](https://openprocessing.org/@muelm658/3013126)
- [Bouncing Ball](https://openprocessing.org/@muelm658/3012886)
- [Random Walker](https://openprocessing.org/@muelm658/3012878)
- [Feedback](https://openprocessing.org/@muelm658/3012868)
- [Click/Type](https://openprocessing.org/@muelm658/3012887)

- [2.1 - existing variables in p5](https://www.youtube.com/watch?v=7A5tKW9HGoM&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8)
- [2.2 - custom variables in p5](https://www.youtube.com/watch?v=dRhXIIFp-ys&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=9)
- [2.3 - incrementation operators](https://www.youtube.com/watch?v=T26OJGjI8qI&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=10)
- [2.4 - `random()`](https://www.youtube.com/watch?v=POn4cZ0jL-o&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=11)
- p5.js Tutorial Blog: [Variables and Change](https://p5js.org/tutorials/variables-and-change/)
