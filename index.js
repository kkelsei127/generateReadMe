const inquirer = require("inquirer")


//prompts for user
const prompts = [{
    type: 'input',
    message: 'What is the projects name?',
    name: 'Title'
}, {
    type: 'input',
    message: 'What is purpose of this project? Give a detailed description.',
    name: 'Description'
}, {
    type:'input',
    message: 'How do you install your project? List any additional tools needed',
    name: 'Installation'
}, {
    type:'input',
    message:'How is the user supposed to use this project?',
    name:'Usages'
}, {
    type:'input',
    message:"Who are the contributors to this project?",
    name:'Contributors'
}, {
    type:'input',
    message:'How do you test this project?',
    name: 'Test'
}, {
    type:'input',
    message:'What is your GitHub username?',
    name:'Github Username'
}, {
    type:'input',
    message:'What is your email address?',
    name:'Email'
}
]
