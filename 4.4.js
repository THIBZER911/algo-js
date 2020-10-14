const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("number ?"));
let py = [];
let rand10 = () => {
    let diogo = Math.floor(Math.random() * 11) + 1;
}
let multiRand = (n) => {
    for (i = 1 ; i <= n ; i += 1) {
        py.push(rand10());
    }
return py;
}
console.log(multiRand(n))

// let min = () => {
//     Math.min()
// }
// let max = () => {
//     Math.max()
// }