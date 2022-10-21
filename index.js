const inquirer = require('inquirer');
const fs= require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What language(s) do you speak?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication',
      name: 'communication',
    },
    {
        type:'checkbox',
        message: 'whose the coolest?',
        name: 'choices', 
        choices:['iron-man', 'spider-man', 'Thanos', 'igor']
    }
  ])

  .then((response) => {
    console.log(response);
       createFile(response);
  }
  );

//create file
function createFile(response){
    fs.writeFile('Myprofile.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${response.name}</h1>
        <h2>${response.language}</h1>
    </body>
    <script src="./index.js"> </script>
    </html>
    
    `,
    (err) => console.log(err))
}
