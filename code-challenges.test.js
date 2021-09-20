// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
                                    //PSUEDO
//create a function with number as argument
//use conditional if % 3 == 0 to see if number is divisible by 3 and log is divisible
// else log not divisible

// -->  console.log("all tests failed more than they needed to and passed once!".toUpperCase()) //having too much fun sorry

// a) Create a test with expect statements for each of the variables provided.
//--> describe("function", () => {
//     it('should take in a number as an argument and decides if the number is evenly divisble by three or not.', () => {
//         expect("15 is divisible by three")
//     })
// })
//--> describe("function", () => {
//     it('should take in a number as an argument and decides if the number is evenly divisble by three or not.', () => {
//         expect("0 is divisible by three")
//     })
// })
// --> describe("function", () => {
//     it('should take in a number as an argument and decides if the number is evenly divisble by three or not.', () => {
//         expect("-7 is not divisible by three")
//     })
// })
var num1 = 15

const divBy1 = (number) => {
    if(number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        `${number} is not divisible by three`
    }
}
console.log(divBy1(num1));
// // Expected output: "15 is divisible by three"
var num2 = 0

const divBy2 = (number) => {
    if(number % 3 === 0){
        return `${number} is divisible by three`
    } else {
        `${number} is not divisible by three`
    }
}
console.log(divBy2(num2));
// // Expected output: "0 is divisible by three"
var num3 = -7

const divBy3 = (number) => {
    if(number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
console.log(divBy3(num3));
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
                                    //PSUEDO
// create function and use .map() on variable
//use.charat(0).toUpperCase to grab letter at 0 index nd capitalize it
//use .string(1) to return the rest of the string.

// a) Create a test with expect statements for each of the variables provided.

// --> describe("function", () => {
//         it('takes in an array of words and returns an array with all the words capitalized.', () => {
//             expect(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         })
//     })
// -->  describe("function", () => {
//         it('takes in an array of words and returns an array with all the words capitalized.', () => {
//             expect(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//         })
//     })

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.
const allCap = randomNouns1.map(value => value.charAt(0).toUpperCase()+ value.substring(1))

const allCap2 = randomNouns2.map(value => value.charAt(0).toUpperCase()+ value.substring(1))

console.log(allCap);
console.log(allCap2);
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
                                    //PSUEDO
//create a function with string parameters
//make for loop with conditional if i = a,e,i,o,u log vowel
//iterate
//log index
// I could not figure out how to make it stop at the first...

// a) Create a test with expect statements for each of the variables provided.

// --> describe("function", () => {
//     it('takes in a string and logs the index of the first vowel.', () => {
//         expect(1)
//     })
// })
// --> describe("function", () => {
//     it('takes in a string and logs the index of the first vowel.', () => {
//         expect(0)
//     })
// })
// --> describe("function", () => {
//     it('takes in a string and logs the index of the first vowel.', () => {
//         expect(2)
//     })
// })
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// b) Create the function that makes the test pass.

const yuh = (string) => {
    for (let i=0; string.length; i++) {
      if(string[i] === "a" || string[i] === "e" || string[i] === "i") {
        console.log(i);
      }
    }
  }
  console.log(yuh(vowelTester1));

  const yuh2 = (string) => {
    for (let i=0; string.length; i++) {
      if(string[i] === "a" || string[i] === "e" || string[i] === "i") {
        console.log(i);
      }
    }
  }
  console.log(yuh2(vowelTester2));

  const yuh3 = (string) => {
    for (let i=0; string.length; i++) {
      if(string[i] === "a" || string[i] === "e" || string[i] === "i") {
        console.log(i);
      }
    }
  }
  console.log(yuh3(vowelTester3));