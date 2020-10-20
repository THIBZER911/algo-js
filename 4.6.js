const readlineSync = require("readline-sync");
const n = Number(readlineSync.question("number ?"));
const diogo = n => {
    let py = 1;
    let skrt = n;
    for (u = 0 ; u < n ; u ++) {
        py = py * skrt ;
        skrt = skrt - 1;
    }
    return py;
}
console.log (diogo(n))