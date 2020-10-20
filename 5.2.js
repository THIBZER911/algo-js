const readlineSync = require("readline-sync");
let arr = []
let askTvSeries = () => {
    let showName = readlineSync.question("what is the name of your favorite TV serie?");
    let year = readlineSync.question("In which year was this serie produced?");
    let n = Number(readlineSync.question("How many actors in the movie"));
    for (i = 0; i < n ; i += 1) {
        let actor = readlineSync.question("who is the actor bruv");
        arr.push(actor);
    }
    let myObject = {
        "name": showName ,
        "prodYear": year ,
        "cast": arr ,
    }
    return myObject;
}
console.log(JSON.stringify(askTvSeries()))
const randomizeCast = (arr) => {
    var currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}
randomizeCast(arr);
console.log(arr);

