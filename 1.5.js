const readlineSync = require("readline-sync");
let nummer1 = readlineSync.question("Give me a number with a decimal");
let nummer2 = readlineSync.question("again pls");
console.log(Math.floor(nummer1) * nummer2)
