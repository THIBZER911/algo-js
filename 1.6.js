const readlineSync = require("readline-sync");
let nummer1 = Math.floor(readlineSync.question("Give me an integer pls"));
let nummer2 = Math.floor(readlineSync.question("again pls"));
console.log(nummer1%nummer2)