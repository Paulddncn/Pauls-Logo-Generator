class Square {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    toString () {
        return `<rect x="100" y="120" width="300" height="300" stroke="black" fill="${this.shapeColor}"/>`
    }
}
module.exports = Square