"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// const percentage: number = parseFloat(readline.question("Enter your total percentage: "));
// if (percentage > 90) {
//     console.log("Grade: A");
// } else if (percentage >= 80) {
//     console.log("Grade: B");
// } else if (percentage >= 70) {
//     console.log("Grade: C");
// } else if (percentage >= 60) {
//     console.log("Grade: D");
// } else if (percentage >= 50) {
//     console.log("Grade: E");
// } else {
//     console.log("Grade: Failed");
// }
// const dayNumber: number = parseInt(readline.question("Enter a number (1-7): "));
// switch (dayNumber) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Entry");
//         break;
// }
// const number: number = parseInt(readline.question('Enter the number : '));
// console.log(`Multiplication table for ${number} :`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${number} = ${i * number}`)
// }
// const list: number = parseInt(readline.question('Enter the limit : '));
// let sum : number = 0
// for (let i = 1; i <= list; i++) {
//     if(i %2 !== 0){
//         sum+=i
//     }
// }
// console.log(`Sum is : ${sum}`)
function print_starr(rows) {
    for (var i = 1; i <= rows; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
print_starr(5);
