const myName = process.argv[3];

if (myName) {
  console.log(`Greetings, ${myName}!`);
} else {
  console.log("Hello, world!");
}
