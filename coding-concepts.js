// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer:[ "D", "e", "l", "t", "a", " ", "2", "0", "2", "1"]
// b) Verify and explain: [ "D", "e", "l", "t", "a", " ", "2", "0", "2", "1"]. My answer is correct because .split() devides a string into a set of substrings and returns them into and array. By adding the "" it will split each letter as a substring instead of each word.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: This will log undefined because a function needs a return outcome. Basically you are telling the machine how to do it but telling it to "display it".


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: This answer is correct because using the .map() with itereate through each value in the array. By telling the value to * itself by 2, you will get my answer.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:[12,14]
// b) Verify and explain: By using .filter() you are making a decision about each item in the array. inside of the () you can add what you want to be done. using value % 2 === 0 will tell you to display only numbers that are divisible by 2.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohert: "delta", year: 2021}
// b) Verify and explain: the correct answer is "Learn {"student: "George", cohert: "delta", year: 2021}" because you are assigning George to the undefined value of name.
