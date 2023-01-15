const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")



//prompts for user
const prompts = [{
    type: 'input',
    message: 'What is the projects name?',
    name: 'Title'
}, {
    type: 'list',
    message: 'What license did you use (use arrow keys)?',
    choices: ['MIT', 'ISC', 'Zlib'],
    name:'License'
},{
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
    name:'Github'
}, {
    type:'input',
    message:'What is your email address?',
    name:'Email'
}
]

//create readme based off user input
function init(){
    inquirer.prompt(prompts)
    .then((data) => {
        console.log(data)
        fs.writeFile('README.md', generateMarkdown(data), ()=> {
            console.log('success')
        })
    })
    .catch((error) => {
        if (error.isTtyError){
            console.log(error)
        } else {
            console.log(error)
        }
    })
}

init()