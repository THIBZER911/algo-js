const readlineSync = require("readline-sync");
let username = readlineSync.question("who are you?");
console.log(`Hello `+username)