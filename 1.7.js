const readlineSync = require("readline-sync");
let shoe = readlineSync.question("what is your shoe size?");
let byear = readlineSync.question("what is your birth year?");
console.log(((shoe * 2) + 5) * 50 - byear + 1766)