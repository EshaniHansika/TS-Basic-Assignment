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
  const r= Number(readLine(" radius   "));
  const pi = Math.PI;
  const areaofcircle = pi * Math.pow(r, 2);
  console.log(` Area of a Cirule= ${areaofcircle}`);
  const areaofsphere = 4 * pi * Math.pow(r, 2);
  console.log(` Area of a Sphere= ${areaofsphere}`);
}

function runExerciseFive() {
let n1 = Number(readLine(" Number  "));
let n2 = Number(readLine(" Number  "));
if(Math.abs(n2 - n1) == 1){
    console.log(" This are Consecutive Number");
}
else 
    console.log(" This are not Consecutive Number");
}

function runExerciseSix() {
  const N1 = Number(readLine(" positive integer Number "));
  if(N1 %2 == 0){
    console.log(` ${N1} is a Even Number`);
  }
  else 
  console.log(` ${N1} is a Odd Number`);

}

function runExerciseSeven() {
  const T1 = Number(readLine(" Body Temperature in Celsius: "));
  if(T1>=38){
    console.log(` She or He Has a fever`);
  }
  else
  console.log(` She or He Hasn't a fever`);
}

function runExerciseEight() {
  const Num1 = Number(readLine("  Marks: "));
  if(Num1>=90){
    console.log(` Grade: A`);
  }
  else if(Num1>=75){
    console.log(` Grade: B`);
  }
  else if(Num1>=60){
    console.log(` Grade: C`); 
  }
  else if(Num1>=40){
    console.log(` Grade: D`);
  }
  else     
  console.log(` Grade: E`);

}

function runExerciseNine() {}

function runExerciseTen() {}

function runExerciseEleven() {
  const number1 = Number(readLine("  Number "));
  const number2 =Number(readLine("  Number "));
  let op = readLine(" + , - , * , / : ");
  if( op == "+"){
    let Result = number1 + number2;
    console.log(` Result = ${number1} + ${number2} = ${Result}`);
  }
  else if( op == "-"){
    let Result = number1 - number2;
    console.log(` Result = ${number1} - ${number2} = ${Result}`);
  }
  else if( op == "*"){
    let Result = number1 * number2;
    console.log(` Result = ${number1} * ${number2} = ${Result}`);
  }
  else if( op == "/"){
    let Result = number1 / number2;
    console.log(` Result = ${number1} / ${number2} = ${Result}`);
  }
  else
  console.log(` Wrong Options`)

}

function runExerciseTwelve() {

  const Num = Number(readLine(" End Number: "))
  if (Num>=100){
    return;
  }

  console.log(" Using for loop:");
  console.log(" Ascending order:");
  for (let i=1; i<=Num; i++){
    console.log(  i);
  }

  console.log(" Descending order:");
  for (let i = Num; i >= 1; i--) {
    console.log(  i);
}

console.log(" Using for while:");
console.log(" Ascending order:");
let i=1;
while(i<=Num){
  console.log(  i);
    i ++;
}

console.log(" Descending order:");
i=Num;
while(i>=1){
  console.log(  i);
    i --;
}
console.log("Using do-while loop:");
  console.log("Ascending order:");
  i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= Num);

  console.log("Descending order:");
  i = Num;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}
function runExerciseThirteen() {
  const SecretNumber = Math.floor(Math.random() * 10) + 1;

  while(true){
    console.log("Give the Number from 1 to 10 ")
    const guessnum = Number(readLine("  Number "));

    if( guessnum > SecretNumber){
     console.log(`It's wrong number. That number is less than your guess number. try again `); 
    }
    else if( guessnum < SecretNumber){
      console.log(`It's wrong number. That number is greater than your guess number. try again `);
    }
    else{
      console.log( `  It's correct! The Secret Number is ${SecretNumber}.`  ) 
      break;
    }
  }
}

function runExercisefourteen() {

for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += `${(i * j).toString().padStart(4, ' ')} `;
    }
    console.log(row);
  }
}


function runExerciseFifteen() {}

function runExerciseSixteen() {
  let num = Number(readLine("Number "));
  let sum = num ;
  let count = 0;

  while(num !== 0){
    num = Number(readLine("Number "));
     sum += num;
     count ++  
  }
  let Averge = sum/count;
  
  console.log(`Sum = ${sum}`);
  console.log(`Averge = ${Averge}`);
}

  
  function runExerciseSeventeen() {}

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
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExercisefourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
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
