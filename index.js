const inquirer = require('inquirer');
const fs= require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Title of your project?!',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the purpose for your project? What goal are you trying to achieve?',
      name: 'goal',
    },
    {
      type: 'input',
      message: 'Describe your porject in 2-3 sentences',
      name: 'desc',
    },
    {
        type: 'input',
        message: 'Future implementations for your project in 2-3 sentences',
        name: 'futr',
      },
      {
        type: 'input',
        message: 'What are you helping your user achieve? what will the future of your project doo to solve this problem even more efficiently',
        name: 'about',
      },
      {
        type: 'input',
        message: 'url for github',
        name: 'git',
      },
      {
        type: 'input',
        message: 'project launched page link',
        name: 'web',
      },
      {
        type: 'input',
        message: 'Who was present on your project? name them all',
        name: 'collab',
      },
      {
        type: 'input',
        message: 'How would you like people to contribute to your project?',
        name: 'contribute',
      },
    // {
    //     type:'checkbox',
    //     message: 'whose the coolest?',
    //     name: 'choices', 
    //     choices:['iron-man', 'spider-man', 'Thanos', 'igor']
    // }
  ])

  .then((response) => {
    console.log(response);
       createFile(response);
  }
  );

//create file
function createFile(response){
    fs.writeFile('README.md',
    ` 
    ### ${response.title}

    ## Description

    ${response.goal}

    ${response.desc}. ${response.futr}. ${response.about}

    ## Links

    Github: ${response.git}
    URL: ${response.web}

    ## Credits

    ${response.collab}
    
    ## License 


    ## How to contribute

    ${response.contribute}
    `,
    (err) => console.log(err))
}
