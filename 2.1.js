const readlineSync = require("readline-sync");
let uage = readlineSync.question("age ?");
if (uage>18) {
    console.log("You are an adult")
;} else {
    console.log("You are not an adult yet")
;}