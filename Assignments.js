"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
// const charEntered:string = readline.question('Enter tyhe character : ');
// console.log(`Entered char is : ${charEntered}`)
// const n1 : number = parseInt(readline.question('Enter the first number:'));
// const n2 : number = parseInt(readline.question('Enter the second number:'));
// const result: number = n1 + n2;
// console.log(result); 
// const principal: number = parseFloat(readline.question("Enter the principal amount (P): "));
// const rate: number = parseFloat(readline.question("Enter the interest rate (R): "));
// const years: number = parseFloat(readline.question("Enter the number of years (n): "));
// const simpleInterest: number = (principal * rate * years) / 100;
// console.log(`The Simple Interest is: ${simpleInterest}`);
// const mark : number = parseFloat(readline.question('Enter the mark'));
// if(mark >= 50){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }
var percentage = parseFloat(readline.question("Enter your total percentage: "));
if (percentage > 90) {
    console.log("Grade: A");
}
else if (percentage >= 80) {
    console.log("Grade: B");
}
else if (percentage >= 70) {
    console.log("Grade: C");
}
else if (percentage >= 60) {
    console.log("Grade: D");
}
else if (percentage >= 50) {
    console.log("Grade: E");
}
else {
    console.log("Grade: Failed");
}
