class Rectangle {
    constructor(topLeftxPos, topLeftyPos, rectanglength, rectangwidth){
        this.topLeftxPos = topLeftxPos;
        this.topLeftyPos = topLeftyPos;
        this.rectanglength = rectanglength;
        this.rectangwidth = rectangwidth;
    }
    get topRightxPos () {
        return (this.topLeftxPos + this.rectangwidth)
    }
    get bottomLeftyPos () {
        return (this.topLeftyPos - this.rectanglength)
    }
    collides(otherRectangle){
        if (
            ((otherRectangle.topLeftxPos >= this.topLeftxPos && otherRectangle.topLeftxPos <= this.topRightxPos)
            (otherRectangle.topRightXPos>=this.topLeftXPos && otherRectangle.topRightXPos<=this.topRightXPos)) 
            && 
            ((otherRectangle.topLeftYPos<=this.topLeftYPos && otherRectangle.topLeftYPos>=this.bottomLeftYPos)
            || (otherRectangle.bottomLeftYPos<=this.topLeftYPos && otherRectangle.bottomLeftYPos>=this.bottomLeftYPos)))
            { return true;
        } else {
            return false;
        }
    }
}
let createRectangle = () => {
    let arr = [];
    for (i = 0; i <= 1000; i += 1 ) {
        arr.push(new Rectangle(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)))
    }
    return arr;
}
console.log(createRectangle())