class Circle {
    constructor (xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos= yOffset;
    }
    get surface () {
        return ((this.radius ** 2) * Math.PI)
    }
}
let py = new Circle(1, 1, 420)