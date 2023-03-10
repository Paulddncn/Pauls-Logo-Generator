class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    toString () {
        return `<circle stroke="black" cx="250" cy="275" r="150" fill="${this.shapeColor}"/>`
    }
}
module.exports = Circle