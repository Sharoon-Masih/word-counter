import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.underline.yellow("\t\t\tWord Counter"));

let answer=await inquirer.prompt({
    type:"input",
    name:"userInput",
    message:chalk.blue("\nWrite the paragraph:")
})

let userStr:string=answer.userInput
let userArr:string[]=userStr.split(" ")
let counter:number=0;

for(let i=0;i<userArr.length;i++)
{
    if(userArr[i]!=="is" && userArr[i]!=="and" && userArr[i]!=="are" && userArr[i]!=="in")
    {
    counter++;
    }
}
console.log("Total words are: ",counter);
console.log(chalk.bold.redBright.bgGrey("\nNote:It will not consider 'is,are,and,in' as words and write punctuations mark without spaces."))


