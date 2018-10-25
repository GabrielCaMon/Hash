// const readline = require('readline');
// let 
// const rl = readline.createInterface({
//  input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let readPerson={
  name: '',
  sayings:[]
};
rl.question("What is the name of a real person? \n",function(answer){
  readPerson.name = answer;
  rl.setPrompt(`What would ${readPerson.name} say?`)
  rl.prompt()
  

  rl.on('line',function(saying){

    readPerson.sayings.push(saying.trim());
    if(saying.toLowerCase().trim() === 'exit'){
      rl.close();
    }else{
      rl.setPrompt(`What else would ${readPerson.name} say? ('exit' to leave)`)
      rl.prompt()
    }
    
  })
});

rl.on('close',function(){
  console.log("%s is a real person that says %j",readPerson.name,readPerson.sayings)
  process.exit();
})
