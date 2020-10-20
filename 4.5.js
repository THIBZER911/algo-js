let a = [1,1]
let b = [2,2]
const calcDistance = (a, b) => {
    return ((((b[0]-a[0]) ** 2) + ((b[1]-a[1]) ** 2)) ** (1/2));
}
console.log(calcDistance(a,b))