const readlineSync = require("readline-sync");
let n1 = Number(readlineSync.question("what is the length of the rectangle?"))
let n2 = Number(readlineSync.question("what is the width of the rectangle?"))
//ask the user the values of the rectangle
let calcSurface = (x, y) => {
    return (x * y) ;
}
//create the function that will mutliply 2 numbers (surface of a rectangle)
console.log(calcSurface(n1, n2))
//call the function with the given values 