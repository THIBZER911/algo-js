const readlineSync = require("readline-sync");
let favnum = Number(readlineSync.question("what is your favorite number?"));
while (favnum !== 42) {
   let favnum = Number(readlineSync.question("Are you sure ?")) ;
}