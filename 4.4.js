const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("number ?"));
let py = [];
let rand10 = () => {
    let diogo = Math.floor(Math.random() * 11);
    return diogo
}
const multiRand = (n, py) => {
    for (i = 1 ; i <= n ; i += 1) {
        py.push(rand10());
    }
    return py;
}
py = multiRand(n,py);
console.log(py);
let min = (...x) => {
    let skrt = Math.min(...x);
    return skrt ;
};
let max = (...x) => {
    let skrt = Math.max(...x);
    return skrt ;
};
let avg = (py) => {
    let thibzer = 0;
    for (u = 0 ; u < py.length ; u += 1) {
        thibzer += py[u] ;
    }
    let sam = py.length ;
    return (thibzer / sam);
};
let matis = avg(py)
console.log(min(...py));
console.log(matis);