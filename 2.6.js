const readlineSync = require("readline-sync");
let weekday = Number(readlineSync.question("Give me a number between 1 and 7"))
while (weekday > 7) {
    weekday = Number(readlineSync.question("Between 1 and 7 plsss")) ;
}
if (weekday === 1) {
    console.log("Monday");
}
else if (weekday === 2) {
    console.log("Tuesday");
}
else if (weekday === 3) {
    console.log("Wednesday");   
}
else if (weekday === 4) {
    console.log("Thursday");
}
else if (weekday === 5) {
    console.log("Friday");
}
else if (weekday === 6) {
    console.log("Saturday");
}
else {
    console.log("Sunday");
}