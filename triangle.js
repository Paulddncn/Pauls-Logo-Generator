class Rectangle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    toString () {
        return ` <polygon points="240, 0 90,340 390,340" stroke="black" fill="${this.shapeColor}"/>`
    }
}
module.exports = Rectangle