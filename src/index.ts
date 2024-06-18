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

  const evennum1 = Number(readLine("  Enter the Even Number  "));
  const oddnum1 = Number(readLine("   Enter the odd Number  "));
  const Result = oddnum1 / evennum1;
console.log(`b) Result =${oddnum1} ÷ ${evennum1} = ${Result}`);
}

function runExerciseFour() {
  console.log(`Calculate the Area & Sphere of a Circule`);
  
  const r= Number(readLine("Enter a value for the radius:   "));
  const pi = Math.PI;
  const areaofcircle = pi * Math.pow(r, 2);
  console.log(` Area of a Cirule= ${areaofcircle}`);
  const areaofsphere = 4 * pi * Math.pow(r, 2);
  console.log(` Area of a Sphere= ${areaofsphere}`);
}

function runExerciseFive() {
console.log(`Chechking the Consecutive Number`);

let n1 = Number(readLine(" Number  "));
let n2 = Number(readLine(" Number  "));
if(Math.abs(n2 - n1) == 1){
    console.log(" This are Consecutive Number");
}
else 
    console.log(" This are not Consecutive Number");
}

function runExerciseSix() {
console.log(`Chechking the Even or Odd number`);
 
  const N1 = Number(readLine(" positive integer Number "));
  if(N1 %2 == 0){
    console.log(` ${N1} is a Even Number`);
  }
  else 
  console.log(` ${N1} is a Odd Number`);

}

function runExerciseSeven() {
console.log(`Chechking the Body Temperature`);

  const T1 = Number(readLine(" Body Temperature in Celsius: "));
  if(T1>=38){
    console.log(` She or He Has a fever`);
  }
  else
  console.log(` She or He Hasn't a fever`);
}

function runExerciseEight() {
  const Grade:string = (readLine("  Please Enter your Grade(A, B, C, D, E): ")).toUpperCase();
  
  switch (Grade){
    case "A":
      console.log(" Excellent work! You've achieved the highest grade.");
      break;
    case "B":
      console.log(" Great job! You've done very well.");
      break;
    case "C":
      console.log(" Good effort! You've passed.");
      break;
    case "D":
      console.log( "  You passed, but there's room for improvement.");
      break;
    case "E":
      console.log(" You need to work harder to pass next time.");
      break
    default:
      console.log(" Invalid grade entered. Please enter a grade between A, B, C, D, E");
        break;
  }

}

function runExerciseNine() {
  function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr == cleanedStr.split('').reverse().join('');
  }

  const inputElement = readLine( "InputElement -  ")
  const result = isPalindrome(inputElement);

  if (result) {
    console.log(`"${inputElement}" is a palindrome.`);
  } else {
    console.log(`"${inputElement}" is not a palindrome.`);
  }
}


function runExerciseTen(){
// A)
  console.log("A)");

  const text = "The quick fox jumped Over the DOG ";
  const newtext = text.replace("quick", "brown").replace("Over", "over").replace("DOG","lazy dog");
  console.log(`Original Text: ${text}`);
  console.log(`Modified Text: ${newtext}`);

// B)
  console.log("B)");
   const Word1 = readLine( "Enter first word: " ).toUpperCase();
   const Word2 = readLine( "Enter second word: " ).toUpperCase();

   if( Word1 == Word2){
    console.log("Both are Same Words")
   }
   else{
    console.log("Both are not Same Words")
   }

// C)
  console.log("C)");
   const inputword = "Donkey";
   const displayword = inputword.replace("Donkey","Monkey")
   console.log(displayword);

// D)
  console.log("D)");
 
   const paragraph = "I am going to visit kolmarden zoo tommorrow. I am a big fan of the doiphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there .";
   const newparagraph = text.replace("I", "We").replace("am","are");
   console.log(`Original paragraph: ${paragraph}`);
   console.log(`Modified paragraph: ${newparagraph}`);
 
// E)
  console.log("E)");
 
   const ActualString = "She is the popular singer";
   const ExpectedSring = ActualString.replace("popular", "most popular");
   console.log(`Actual String: ${ActualString}`);
   console.log(`Expected Sring: ${ExpectedSring}`);   

// F)
  console.log("F)");
 
    const actualString = "A friend is the asset of your life";
    const expectedSring = actualString.replace("friend", "true friend").replace("asset","greastest asset");
    console.log(`Actual String: ${actualString}`);
    console.log(`Expected Sring: ${expectedSring}`);  

// G)
  console.log("G)");
 
    const actual = "My name is Eshani Hansika";
    const expected =actual.replace(actual,"Eshani Hansika")
    console.log(`Actual String: ${actual}`);
    console.log(`Expected Sring: ${expected}`);  
// G)
console.log("G)");
 
const Actual = "My name is Eshani Hansika";
const Expected =Actual.replace(Actual,"Eshani Hansika")
console.log(`Actual String: ${Actual}`);
console.log(`Expected Sring: ${Expected}`);  

}

function runExerciseEleven() {
  const number1 = Number(readLine("  Number "));
  const number2 =Number(readLine("  Number "));
  let operator = readLine(" + , - , * , / : ");
  switch (operator) {
    case "+":
      console.log(`Result: ${number1} + ${number2} = ${number1 + number2}`);
      break;
    case "-":
      console.log(`Result: ${number1} - ${number2} = ${number1 - number2}`);
      break;
    case "-":
      console.log(`Result: ${number1} * ${number2} = ${number1 * number2}`);
      break;
    case "/":
      console.log(`Result: ${number1} / ${number2} = ${number1 / number2}`);
      break;
  
    default:
      console.log(` Wrong Options`)
      break;
  }
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


function runExerciseFifteen() {
  let pattern = "";

  for (let i = 5; i >= 1; i--) {
    pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
      pattern += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      pattern += "*";
    }
     console.log(pattern);
  }
}

function runExerciseSixteen() {
  let num = Number(readLine(" Number "));
  let sum = num ;
  let count = 0;

  while(num !== 0){
    num = Number(readLine(" Number "));
     sum += num;
     count ++  
  }
  let Averge = sum/count;
  
  console.log(`   Sum = ${sum}`);
  console.log(`   Averge = ${Averge}`);
}

  
  function runExerciseSeventeen() {
    let EnteredNum = Number(readLine(" Enter the number of value for the Fibonacci series: " ));
    let a = 0;
    let b = 1;

    for (let i=1; i<=EnteredNum; i++){
      console.log(a);
      
      let nextterm = a + b;
      a = b;
      b = nextterm;
    }
  }

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
