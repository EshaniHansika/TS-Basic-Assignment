// *** Ignore the following lines ***
import chalk from "chalk";
import { readlink } from "fs";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Eshani";
  const lastName = "Hansika"; 
  console.log(`Hello ${firstName} ${lastName} ! I am glad to inform you that ypu are the test subject of my first assignment! `);

}

function runExerciseTwo() {
  const FirstName = "Eshani";
  const LastName = "Hansika"; 
  console.log(`Hello ${FirstName} ${LastName}! Have a nice day! `);
}

function runExerciseThree() {
  const num1= Number(readLine("   Number  "));
  const num2 = Number(readLine("  Number  "));
  const Sum = num1 + num2;
  console.log(`a) Sum = ${num1} + ${num2} = ${Sum} \n`);

  const evennum1 = Number(readLine("  Even Number  "));
  const oddnum1 = Number(readLine("   odd Number  "));
  const Result = oddnum1 / evennum1;
console.log(`b) Result =${oddnum1} ÷ ${evennum1} = ${Result}`);
}

function runExerciseFour() {
  const r= readLine(" radius   ");
  const pi = Math.PI;
  const area = pi * Math.pow(r, 2);
  console.log(` Area = ${area}`);
}

function runExerciseFive() {
let n1 = readLine(" Number  ");
let n2 = readLine(" Number  ");
if(Math.abs(n2 - n1) == 1){
    console.log(" This are Consecutive Number");
}
else 
    console.log(" This are not Consecutive Number");
}

function runExerciseSix() {
  const N1 = readLine(" positive integer Number ");
  if(N1 %2 == 0){
    console.log(` ${N1} is a Even Number`);
  }
  else 
  console.log(` ${N1} is a Odd Number`);

}

function runExerciseSeven() {}

function runExerciseEight() {}

function runExerciseNine() {}

function runExerciseTen() {}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
