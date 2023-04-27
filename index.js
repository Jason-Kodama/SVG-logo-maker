const inquirer = require('inquirer');
const fs = require('fs')

//const shapes = require('shapes');

inquirer 
    .prompt ([{
        type: 'input',
        message: 'Pick any 3 letters for your logo.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text?',
        name: 'text-color',
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
        name: 'shape-color',
    }
])