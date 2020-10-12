const readlineSync = require("readline-sync");
let firstname = readlineSync.question("Firstname?");
let name = readlineSync.question("name?");
let city = readlineSync.question("where's you from?");
console.log(`Hello `+city +`boi`)