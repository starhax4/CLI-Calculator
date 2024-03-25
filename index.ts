#! /usr/bin/env node
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
  {message: "Enter first Number:" , type : "number" , name: "num1"},
  {message: "Enter Second Numer :", type : "number" , name : "num2"},
  {message : "Choose an Operation :" , type: "list", name: 'operator' , choices: ["+","-","*","/"]}

]);

if(answer.operator === "+"){
  console.log(`Answer : ${answer.num1 + answer.num2} `);
}else if(answer.operator === "-"){
  console.log(`Answer : ${answer.num1 - answer.num2}`);

}else if(answer.operator === "*"){
  console.log(`Answer : ${answer.num1 * answer.num2}`);
  
}else if(answer.operator === "/"){
  console.log(`Answer : ${answer.num1 / answer.num2}`);
  
}
else {
  console.log("Invalid Operation!")
}

