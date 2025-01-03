// Infer types (Implicit types)

let username = 'suhail';
// username = 21 // This will cause an error because 'username1' is inferred as a string

let job_salary = 30_000;
// job_salary = 'Suhail' // This will cause an error because 'job_salary1' is inferred as a number


// Defining Types (Explicit types)

// let applicant: string = 'suhail'
// let email: string = 'suhail@gmail.com';
// let age: number = 22;
// let isActive: Boolean = true;
// let names: string[] = ['js', 'c', 'python'];
// let numbers: number[] = [1, 2, 43, 4, 5];
// let emptyArray: [] = [];
// let userDetails: { name: string, age: number } = {
//     name: 'suhail',
//     age: 32
// };


interface Details {
    name: string;
    age: number;
    salary: number;
    getName:()=> void; 
}

let userDetails: Details = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName(){
        console.log("Hi i am suhail subair")
    }
}
console.log(userDetails)
