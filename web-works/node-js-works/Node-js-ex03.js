// program to show working with readline 
const readline = require('readline'); 

const rl = readline.createInterface({input:process.stdin, output:process.stdout});

let num1 = Math.floor((Math.random()*20) +1);
let num2 = Math.floor((Math.random()*20) +1);

let answer = num1 + num2;

rl.question(`what do you think sum of ${num1}, ${num2}\n`, (userAnswer)=>{
    if (parseInt(userAnswer) === answer){
        console.log("Correct Answer...");
        rl.close();
    }else {
        rl.setPrompt(`Oops you are wrong, try again \n`); 
        rl.prompt(); 
        rl.on('line', (userAnswer) => {
            if (parseInt(userAnswer) === answer){
                console.log("Correct Answer...");
                rl.close();
            }else {
                rl.setPrompt(`You entered the answer wrongly ${userAnswer} Try again`);
                rl.prompt();
            }
        })
    }
})

rl.on('close', () => {
    console.log("on close"); 
})