// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js
console.log(process.argv);

let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

// we want to caltulate 3 values: tip amount, total bill, and the totla for each guest

//calculate the tip amount
let tipAmount = bill * tipPercentage;
console.log("Tip amount:", tipAmount);

//calculate the total bill
let totalBill = bill + tipAmount;
console.log("total bill:", totalBill);

//calculate total for each guest
letAmountOwedPerGuest = totalBill / numGuests;
console.log("maount owed per guest:", letAmountOwedPerGuest);
