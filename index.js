const inqurier = require('inquirer');
const shapes = require('shapes');

inquirer 
    .prompts ({
        type: 'input',
        message: 'Pick any 3 letters for your logo.',
        name: 'text',
    }
    {
        type: 'input',
        message: 'What color would you like the text?',
        name: 'text-color',
    }
    {
        type: 'input',
        message: 'Pick a shape for your logo',
        name: 'shape',
        choice: 'circle, triangle, square',
    }
    {
        type: 'input',
        message: 'What color would you like the shape?',
        name: 'shape-color',
    }
    )