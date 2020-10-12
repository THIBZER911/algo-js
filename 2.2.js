const readlineSync = require("readline-sync");
let max = readlineSync.question("Give me the max number");
let min = readlineSync.question("Give me the min number");
let current = readlineSync.question("Give me the current number");
if ((min < current) && (current < max)) {
    console.log(current);
}
else if (max < min) {
    console.log("You fucking donkey");
}
else {
    console.log("Oh dear oh gorgeous");
}