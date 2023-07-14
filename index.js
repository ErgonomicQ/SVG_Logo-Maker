// const fs = require('fs');
// const inquirer = require('inquirer');
// // const {createCanvas}  = require('canvas');
// const shapes = require('./lib/shapes');

// async function generateLogo() {
//     const answers = await inquirer.prompt([
//         {
//             name: 'logoName',
//             message: 'Enter up to three characters:', 
//             validate: (input) => {
//                 return input.length <= 3 || 'Too many characters, Please enter up to 3 characters.';
//             },
//         },
//         {
//             name: 'textColor',
//             message: 'Enter your logoName color (Use only keywords or hexidecimal numbers):',
//         },
//         {
//             type: 'list',
//             name: 'shape',
//             message: 'Chose a shape:',
//             choices: ['circle', 'triangle', 'square'],
//         },
//         {
//             name: 'colorShape',
//             message: 'Enter the shape color (Use only keywords or hexidecimal numbers):'
//         },
//         {
//             name: 'fileName',
//             message: 'Finally, what is the name of the file:'
//         },
//     ]);

//     const canvas = createCanvas(300, 200);
//     const context = canvas.getContext('2d');

//     const colorShape = answers.colorShape;
//     context.fillStyle = colorShape;
//     switch (answers.shape){
//         case 'circle':
//             shapes.circleChoice(context);
//         break;
//         case 'triangle':
//             shapes.triangleChoice(context);
//         break;
//         case 'square':
//             shapes.squareChoice(context);
//         break;
//     }
    
//   // Draw the logoName
//   const textColor = answers.textColor;
//   context.fillStyle = textColor;
//   context.font = 'bold 48px Arial';
//   context.textAlign = 'center';
//   context.textBaseline = 'middle';
//   context.fillText(answers.logoName, 150, 100);

//   // Save the canvas as SVG
//   const svg = generateSvgMarkup(canvas.toBuffer().toString('base64'));
//     // Generate a unique file name
//     const fileName = uniqueFileName(answers.fileName);

//     // Save the SVG file
//     const filePath = `examples/${fileName}.svg`;
//     fs.writeFileSync(filePath, svg);
  
//     console.log(`Generated ${filePath}`);
// }

// function generateSvgMarkup(imageData) {
//     return `
//       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200">
//         <image width="300" height="200" xlink:href="data:image/png;base64,${imageData}" />
//       </svg>
//     `.trim();
//   };

//   function uniqueFileName(fileName) {
//     return `${fileName}`;
//   }

// generateLogo().catch((error) => console.error(error));

// module.exports ={
//     generateLogo
// };


const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the font color(basic name or hexidecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color(basic name or hexidecimal):',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'Enter the file name (without extension):',
      validate: (input) => input.length > 0,
    },
  ]);

  const { logoName, textColor, shape, shapeColor, fileName } = answers;
  console.log('logoName:', logoName);
  console.log('textColor:', textColor);
  let shapeObject;

  switch (shape) {
    case 'circle':
      shapeObject = new Circle();
      break;
    case 'triangle':
      shapeObject = new Triangle();
      break;
    case 'square':
      shapeObject = new Square();
      break;
    default:
      throw new Error('Invalid shape');
  }

  shapeObject.setColor(shapeColor);

  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" font-family="Arial">
    ${shapeObject.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24">${logoName}</text>
  </svg>
`;

  const filePath = `examples/${fileName}.svg`;

  fs.writeFileSync(filePath, svgMarkup);
  console.log(`Generated ${fileName}.svg`);
}

generateLogo();
