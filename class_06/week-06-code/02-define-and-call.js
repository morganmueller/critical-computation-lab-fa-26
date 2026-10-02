// WEEK 06 · 02 · DEFINE AND CALL
// The smallest user-defined function. Open the console to see the output.
// Try: comment out the calls in setup(). Does anything print?
// (Defining a function does nothing until you call it.)

function setup() {
  createCanvas(400, 400);

  // CALL — the values in the parentheses are arguments
  yourName("Morgan", "Mueller");
  yourName("Ada", "Lovelace");
}

// DEFINE — firstName and lastName are parameters
function yourName(firstName, lastName) {
  console.log("my name is " + firstName + " " + lastName);
}
