const inquirer = require('inquirer');
const Square = require('./square');
const Circle = require('./circle')
const Triangle = require('./triangle')
const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter up to three characters of text for your logo.',
            name: 'text',
            validate: (input) => {
                if (input.length <= 3) {
                    return true
                }
                return "Please enter no more than three characters."
            }
        },
        {
            type: 'input',
            message: 'Please enter a text color.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['square', 'circle', 'triangle']
            , function(answers) {
                console.log(JSON.stringify(answers, null, 3));
        }},
        {
            type: 'input',
            message: 'Please enter a background color for the logo.',
            name: 'shapeColor',
        },
])}
const generateShape = (shape,shapeColor) => {
    if (shape === 'circle') {
        return new Circle (shapeColor)
    }
    else if (shape === 'square') {
        return new Square (shapeColor)
    }
    else if (shape === 'triangle') {
        return new Triangle (shapeColor)
    }
}
const generateSVG = ({ text, textColor, shape, shapeColor }) =>

    `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="500" height="500"  xmlns="http://www.w3.org/2000/svg"
        xmlns:link="http://www.w3.org/1999/xlink">
       ${generateShape (shape, shapeColor)}
        <text y="300" x="150" font-size="100px">
        <tspan font-weight="bolder" font-family="monospace" fill="${textColor}">${text}</tspan>
        </text>
    </svg> `
    ;

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => {
            console.log(answers)
            writeFile('logo.svg', generateSVG(answers))
        })
        .then(() => console.log('Successfully wrote to '))
        .catch((err) => console.error(err));
};

init();