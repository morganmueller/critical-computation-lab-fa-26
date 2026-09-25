# Week 05: 9/25/2026

## Agenda

1. Assignment #2 [Part 2]
2. Lecture Discussion / Assignment #3 [Part 1]
3. Tutorial: Conditionals and Time
4. References, Useful Links, and Demos
## Housekeeping
1. Attendance
2. Lecture check-in
## Assignment #2 [Part 2]

- In groups of 3, share your work, following our [critique structure](https://github.com/morganmueller/critical-computation-lab-fa-26/tree/main/class_03#structure-of-critique) for ~15 minutes
- After you are done sharing, pick a person from your group to share their project with the class. 
##  Lecture Discussion

Lecture is mandatory to attend! We will now be adding a grade item for lecture attendance in the lab. 

Even if the concepts feel irrelevant, simply *learning* more about how things work can influence how you might interpret an assignment idea or prompt. 

### Reading: Six Ways of Looking at Crip Time

From the lecture, what are different external (standards, measurements, drift) and internal (circadian rhythm, physical responses) that you experience?

1. Time travel
2. Grief time
3. Broken time
4. Sick time
5. Writing time
6. Vampire time

1 sentence / takeaway to be added to [reading discussion form](https://forms.gle/3s5aemW7rQKzmbJ46).

## Tutorial: Conditionals and Time

| Coding Glossary                            |                                                                                                                                                                                                                    |                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| boolean                                    | a type of variable that is either `true` or `false`.                                                                                                                                                               | `let daytime = true`         |
| comparison operator                        | the operator in a comparison / boolean expression                                                                                                                                                                  | `>`, `>=`, `<`, `<=`         |
| comparison expression / boolean expression | an expression that evaluates to `true` or `false`, using comparison operators<br><br>(in JavaScript, `truthy` is a [value that is true](https://developer.mozilla.org/en-US/docs/Glossary/Truthy))                 | `5 < 10`                     |
| conditional statement / `if` statement     | uses `if`, `else if`, and `else` to decide whether a block of code should be run by checking the provided conditional expression. if `true`, executes the code in the `{}`. if `false`, skips the code in the `{}` | `if (5 < 10){}`              |
| logical operator                           | another operator that allows us to write more than one expression in a code statement                                                                                                                              | `&&`, `\|\|`, `!`            |
| modulo operator / remainder operator       | *another* operator that calculates the remainder left over when dividing.                                                                                                                                          | `10 % 5 = 0`<br>`10 % 3 = 1` |
See [our class glossary](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/glossary.md) if you need to review any of the terms mentioned. 
### Conditionals: `if`, `else if`, and `else`

#### Comparison Operators

In an expression, we have seen both assignment (`=`), and mathematical operators (`+`, `-` etc). We can also use comparison operators to compare between two values of a variable against a number.

This is a way for us to create environments that have particular logic to the interaction, and we need to be explicit about what we are telling the computer in order to make the interaction happen.

| comparison operators     |       |
| ------------------------ | ----- |
| equal                    | `==`  |
| NOT equal                | `!=`  |
| strict equal             | `===` |
| strict NOT equal         | `!==` |
| greater than             | `>`   |
| greater than or equal to | `>=`  |
| less than                | `<`   |
| less than or equal to    | `<=`  |
Comparison expressions evaluate to either `true` or `false`, which is a `Boolean` variable type.

See [MDN Guide: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators).
#### Differences Between `=`, `==` and `===`?

These are all different syntaxes!

| Term              | Definition                                              | Syntax | Example                |
| ----------------- | ------------------------------------------------------- | ------ | ---------------------- |
| assignment        | gives a value to a variable                             | `=`    | `let x = 10`           |
| comparison        | loose equality; type and capitalization do *not* matter | `==`   | `if (x == 10){}`       |
| strict comparison | strict equality; type and capitalization *do* matter    | `===`  | `if ("hi" === "Hi"){}` |

So we should know the distinct differences between `=` and `==`, but we typically don't use `===` *in this class*. 
#### Conditional Statements: `if`

A conditional statement is an expression that evaulates to `true` or `false` and does code based on that action. Think of it like a flowchart:

<img src="https://kagi.com/proxy/conditional-statements-3-638.jpg?c=OvWOGeaOTSdcGCVl2otm07WhSg9hGsLVk3dKvcnxgwpckV6LOqfeUCn4AcSIFEk4dB-yGQzgYeV0Enh4Sj1xS2Pxgj0IpDrJuQYuj02WnwdD8RfZGbz1JgOUdgk1dK9qv36szAsSWtnbWVjDDdW_GvZhi6rZFYLUDX-hUV6W6AI%3D" width="400px">

We write conditional statements using the syntax `if()` and putting our comparison expression inside the `()`. We also need `{}`, so any code inside of the if-statement's `{}` will be locked behind that logic, and won't execute unless the comparison expression evaluates to `true`.

```js
let num = 1;

fill("red");

// if statements ask a question:
// is num < 7? 
if (num < 7) {
	// if true, go in here
	fill("green");
} 
// if false, skip

circle(width / 2, height / 2, 30);
```

If statements need a different syntax that changes the logic of the flowchart. This is where logical operators come in. We can determine if something has more than one conditional expression, but only if the logical operators are true.
##### Cascading: `if`, `else if`, `else`

With if-statements, we can write branching in our code to make an entire flowchart. So `if` something happens, do this. `otherwise`, do something else.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220830095017/ifelseifflowchart-660x432.png" width="400">

The way this is written in code is using `if`, `else if` and `else`. `if()` and `else if()` need to have a conditional statement inside the parenthesis, but `else` does NOT have a parenthesis because it is a catch all.

```js
let num = 1;

// is num < 7?
if (num < 7) {
	// if true, go here and skip the rest
	fill("green");
} 
// if num < 7 == false, ask next question
// is num < 10?
else if (num < 10) { 
	// if true, go here and skip the rest
	fill("blue");
} 
// if num < 10 == false, ask next question
// in all other circumstances and all previous questions are false...
else { 
	// ...go here
	fill("red");
}
circle(width / 2, height / 2, 60);
```
##### Nested Conditional Statements

If statements can be nested, or written inside, of one another.

```js
let num1 = 10;
let num2 = 20;

fill("red");

// is num1 < 7?
if (num1 < 7) {
	// if true, go here
	// new, unrelated question: if num < 25?
	if (num2 < 25) {
		// if true, go here
	    fill("green");
	} // if num2 > 25, skip
} // if num1 > 7, skip

circle(width / 2, height / 2, 30);
```

This means that **_both_** comparisons need to evaluate to true in order for us to have a fill of green. But, we can also use a shorthand with the logical operators.

##### Logical Operators

Logical operators allow us to use more than one expression at a time. This is specific syntax so that we are able to write two operators at once.

| logical operators |                                                           |
| ----------------- | --------------------------------------------------------- |
| AND               | `&&` if both expressions evaluate to true                 |
| OR                | `\|\|` if either side of the expression evaluates to true |
| NOT               | `!` if the expression is true, make it false              |

```js
let num1 = 1
let num2 = 3

1 < num2 < 4 // this is incorrect syntax, we have to separate it out
num2 > 1 && num2 < 4 // this is the same as above but split into two expressions, using a logical operator
```

So if we wanted to use more than one comparison expression, we need to determine how their logic connects to the previous expression.

##### `&&`

```js
let num1 = 10;
let num2 = 20;

if (num1 < 7 && num2 < 25) {
  fill("green");
}
```

This does the exact same thing as the example code above, where we nested one if statement inside the other. But now, we need to think about the resulting booleans (from the comparison expressions) + the operators they use. So, we need to evaluate each side of the expression, and then evaluate their total, similar to order of operations.

First, we look at `num1 < 7`, which evaluates to?
Then, we look at `num2 < 25`, which evaluates to?

If it uses the `&&` syntax, BOTH sides need to be true in order to evaluate to true.

##### `||`

With `||`, only ONE expression needs to be true.

```js
let num1 = 10;
let num2 = 20;

if (num1 < 7 || num2 < 25) {
  fill("green");
}
```

So in this example, the fill would be green because ONE side of the logic operator is true.

##### `!`

The NOT operator does a couple of things, but it also means opposite. So it also allows us to assign boolean variables to the opposite of what it was previously. Think of it as multiplying by `-1`.

```js
let event = false;

// if something happens, set event to be the opposite of what it was previously
event = !event;
```

For more on `if...else`, see [MDN Reference `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

For more on logical operators, see [MDN Guide: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators)
### Time

Time in p5 can be handled in a few ways, either using the time since the p5 sketch started running or current time.

Relational time (to the start of p5 sketch):
- [`millis()`](https://p5js.org/reference/p5/millis/): number of milliseconds since the sketch started running
- [`frameCount`](https://p5js.org/reference/p5/frameCount/): a number variable that tracks the number of frames since the sketch started
- [`frameRate()`](https://p5js.org/reference/p5/frameRate/): sets the number of frames per second

Current time ("real" time)
- [`second()`](https://p5js.org/reference/p5/second/): current second as a number from `0-59`
- [`minute()`](https://p5js.org/reference/p5/minute/) : current minute as a number from `0-59`
- [`hour()`](https://p5js.org/reference/p5/hour/): current hour as a number from `0-23`
- There is also `day()`, `month()`, and `year()` in the [Time & Date section](https://p5js.org/reference/#Time%20&%20Date)

### Manipulating numbers

- [`map()`](https://p5js.org/reference/p5/map/): re-maps a number from one range to another
- [`constrain()`](https://p5js.org/reference/p5/constrain/): constrains a number between a minimum and a maximum

## Assignment #3 [Part 1]

- In your groups, share your part 1 and critique each idea knowing what we know now. How might they be implemented based on your knowledge? Ask questions and get feedback to walk out with a single idea to implement for next week. 
## References, Useful Links, and Demos

### References
- Clock/Time Projects:
	- Fruitful School, [Emoji Clock](https://web.archive.org/web/20201126185008/http://www.fruitful.school/blog/2019-12-23.html)
	- Jacopo Colo, [Hex Clock](https://www.jacopocolo.com/hexclock/)
	- Christian Marclay, [The Clock](https://www.youtube.com/watch?v=BoDMEixJYpE)
	- Maya Man, [_A Realistic Day In My Life Living In New York City_](https://whitney.org/exhibitions/maya-man)
	- Eva Decker, [Hypertext.tv](https://hypertext.tv/)
    - Tehching Tsieh, [Life Works](https://diaart.org/exhibition/exhibitions-projects/tehching-hsieh-lifeworks-19781999-exhibition)
    - Felix Gonzalez-Torres, ["Untitled" (Perfect Lovers)](https://www.moma.org/collection/works/81074)
### Useful Links and Demos
- [3.1 - conditional statements](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/1-conditionals)
- [3.2 - making a ball bounce](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/2-bouncing)
- [3.3 - else, else if, and, or](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/3-else-if-and-or)
- [3.4 - boolean variables](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/4-boolean)
- p5.js Tutorial [Conditionals and Interactivity](https://p5js.org/tutorials/conditionals-and-interactivity/)
- MDN Learn Web Development: [Conditionals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)# Week 05: 9/25/2026

