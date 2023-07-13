const fs = require('fs');
const inquirer = require('inquirer');
const createCanvas = require('canvas');
const shapes = require('./lib/shapes');

async function generateLogo() {
    const answers = await inquirer.createPromptModule([
        {
            name: 'text',
            message: 'Enter up to three characters:', 
            validate: (input) => {
                return input.length <= 3 || 'Too many characters, Please enter up to 3 characters.';
            },
        },
        {
            name: 'textColor',
            message: 'Enter your text color (Use only keywords or hexidecimal numbers):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Chose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter the shape color (Use only keywords or hexidecimal numbers):'
        },
    ]);

    const canvas = createCanvas(300, 200);
    const context = canvas.getContext('2d');

    const colorShape = answers.colorShape;
    context.styleFill = colorShape;
    switch (answers.shape){
        case 'circle':
            shapes.circleChoice(context);
        break;
        case 'triangle':
            shapes.triangleChoice(context);
        break;
        case 'square':
            shapes.squareChoice(context);
        break;
    }
    






}