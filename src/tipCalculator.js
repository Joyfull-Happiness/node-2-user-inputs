// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = 100;
let tipPercentage = 0.2;
let numGuests = 4;

// we want to caltulate 3 values: tip amount, total bill, and the totla for each guest

//calculate the tip amount
let tipAmount = bill * tipPercentage;
console.log("Tip amount:", tipAmount);

//calculate the total bill
let totalBill = bill + tipAmount;
console.log("total bill:", totalBill);
