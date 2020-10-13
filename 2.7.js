const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("Give me a number"));
let sol = 0;
for ( let i = 1 ; i <= n ; i += 1 ) {
    let diogo = Number(readlineSync.question("Give me a number"));
    sol += diogo;
}
console.log(sol+n)