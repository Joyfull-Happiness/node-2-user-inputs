/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
console.log(process.argv);

// here i am establishing the dogName variable and assigning it to the third element in the array
const dogName = process.argv[2];

// here i am establishing the dogAge variable and assigning it to the fourth element in the array while using the built in node Number() function to convert the number to a string

const dogAge = Number(process.argv[3]);

//declairing dog age in human years if 1 Years old
let humanYearOne = 15;

//declairing dog age in human years if 2 Years old
let humanYearTwo = 9;

//declairing the dog age multiple for every other year after the second year to equal the number 5
let everyOtherYear = 5;

let humanYears;
//if the dogAge is 1 then the humanYears will be the same as humanYearOne
//if the dog age is not 1 then check if it is 2, if it is 2 then the human years will = humanyearone +humanyeartwo
//if the dog age is not 2 then check if it is greater than = to 3 , if it is then the human years will = huanyearone +humanyeartwo + the dog's age -2 * every other year
//if the dog age is not greater than = to 3 , then it is 0 in human years
if (dogAge === 1) {
  humanYears = humanYearOne;
} else if (dogAge === 2) {
  humanYears = humanYearOne + humanYearTwo;
} else if (dogAge >= 3) {
  humanYears = humanYearOne + humanYearTwo + (dogAge - 2) * everyOtherYear;
} else {
  humanYears = 0;
}
// show back to the user``Your Dog, ${insert dogName}, is ${ insert dogAge} but that's ${insert humanYearscalculated from th if statement above} years old in dog years!`
console.log(
  `Your Dog, ${dogName}, is ${dogAge} but that's ${humanYears} years old in dog years!`
);
