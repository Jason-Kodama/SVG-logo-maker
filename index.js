const inquirer = require('inquirer');
const fs = require('fs')
const shapes = require('./lib/shapes');

//const generateShapes =

inquirer
    .prompt([{
        type: 'input',
        message: 'Pick any 3 letters for your logo.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Pick a shape for your logo',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape?',
        name: 'shapeColor',
    }
    ])
    .then((answers) => {
        let shape 
        if(answers.shape === 'circle') {
            shape = new shapes.Circle(answers.shapeColor)
        }else if(answers.shape ==='triangle'){
            shape = new shapes.Triangle(answers.shapeColor)
        }else if(answers.shape === 'square'){
            shape = new shapes.Square(answers.shapeColor)
        }
        const theSvg = `<svg width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-linecap="round">
${shape.render()}
<text x="50%" y="50%" font-size = "1.7em" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`
        return fs.promises.writeFile('logo.svg', theSvg)
    })
    .then(() => {
        console.log('Generated logo.svg')
    })