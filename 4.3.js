const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("number ?"))
let rand10 = () => {
    let diogo = Math.floor(Math.random() * 11);
    console.log(diogo)
}
let multiRand = (n) => {
    for (i = 1 ; i <= n ; i += 1) {
        rand10() ;
    }
}
multiRand(n)