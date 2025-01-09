import * as readline from 'readline-sync';

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

// function print_starr(rows: number): void {
//     for (let i = 1; i <= rows; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j + ' ';
//         }
//         console.log(row.trim());
//     }
// }

// print_starr(5);


// function swap_arrays(arr1: number[], arr2: number[]):void {
//     if(arr1.length !== arr2.length) {
//         console.log("Array shold be in eqal length..")
//     }
//     [arr1,arr2] = [arr2,arr1]
//     console.log("AArray after swapping==>")
//     console.log(`Array 1 => ${arr1.join(' , ')}`)
//     console.log(`Array 1 => ${arr2.join(' , ')}`)
// }

// let a1 = [1,4,5,6,7,8,9]
// let a2 = [5,9,7,5,3,2,1]

// console.log("Before swapping : ",a1)
// console.log("Before swapping : ",a2)
// swap_arrays(a1,a2)


// function even_count(arr: number[]): void {
//     let count: number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count++
//         }
//     }
//     console.log(count)
// }

// even_count([1, 2, 3, 4, 5, 6, 7, 8, 9])

// function sortArrayDescending(): void {

//     const size: number = parseInt(prompt("Enter the size of an array:") || "0");
  
//     if (isNaN(size) || size <= 0) {
//       console.log("Invalid size. Please enter a positive integer.");
//       return;
//     }

//     const inputValues = prompt(
//       `Enter the ${size} values of the array, separated by commas:`
//     );
  
//     if (!inputValues) {
//       console.log("No values entered. Exiting...");
//       return;
//     }
  
//     const array: number[] = inputValues
//       .split(",")
//       .map((val) => parseInt(val.trim()));
  
//     if (array.some((val) => isNaN(val))) {
//       console.log("Invalid input. Please enter valid numbers.");
//       return;
//     }
  
//     if (array.length !== size) {
//       console.log(
//         `Size mismatch. Expected ${size} elements but got ${array.length}.`
//       );
//       return;
//     }
//     array.sort((a, b) => b - a);
//     console.log("Sorted array (descending order):", array.join(", "));
//   }
  

//   sortArrayDescending();



// const inputString: string = readline.question('Enter a string: ');

// function isPalindrome(str: string): boolean {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// if (isPalindrome(inputString)) {
//     console.log('Entered string is a palindrome');
// } else {
//     console.log('Entered string is not a palindrome');
// }




  