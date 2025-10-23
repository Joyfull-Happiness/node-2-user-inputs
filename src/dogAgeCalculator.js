/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
console.log(process.argv);

// name
const dogName = process.argv[2];

///age
const dogAge = Number(process.argv[3]);

//calculate dog age in human years if 1 Years old
let humanYearOne = 15;

//calculate dog age in human years if 2 Years old
let humanYearTwo = 9;

//calculate dog age in human years if 3 Years old or greater
let everyOtherYear = 5;

let humanYears;

//RESULTS BELOW
if (dogAge === 1) {
  humanYears = humanYearOne;
} else if (dogAge === 2) {
  humanYears = humanYearOne + humanYearTwo;
} else if (dogAge >= 3) {
  humanYears = humanYearOne + humanYearTwo + (dogAge - 2) * everyOtherYear;
} else {
  humanYears = 0;
}

console.log(
  `Your Dog, ${dogName}, is ${dogAge} but that's ${humanYears} years old in dog years!`
);
