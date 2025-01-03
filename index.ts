// Infer types (Implicit types) ================================================================

let username1 = 'suhail';
// username = 21 // This will cause an error because 'username' is inferred as a string

let job_salary1 = 30_000;
// job_salary = 'Suhail' // This will cause an error because 'job_salary' is inferred as a number

// Defining Types (Explicit types)================================================================

let applicant: string = 'suhail';
let email: string = 'suhail@gmail.com';
let age: number = 22;
let isActive: boolean = true; // Changed Boolean to boolean
let names: string[] = ['js', 'c', 'python'];
let numbers: number[] = [1, 2, 43, 4, 5];
let emptyArray: any[] = []; // Changed type to any[] to allow any type of elements

let userDetails1: { name: string, age: number } = {
    name: 'suhail',
    age: 32
};

// Interface definition for user details============================================================
interface Details {
    name: string;
    age: number;
    salary: number;
    getName: () => void; 
}

// Using the interface to define user details
let userDetailsWithInterface: Details = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}



// Type ==============================================================================================

type detailsUsingTypes = {
    name: string;
    age: number;
    salary: number;
    getName: () => void; 
}

let userDetailsWithType: detailsUsingTypes = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}


// ===============================================================================================================

// Union / optional 
type detailsUsingTypes_Union = {
    name: string;
    age: number | string;
    salary: number | string;
    getName?: () => void;  // optional --> if it is not called also it will not give an error , but type checking will be there if you provide any value
}

let langages: (string | number)[] = ['js', 'c', 'python',5,6,9];
let langages1= ['js', 'c', 'python',5,6,9]; // infer  

//=================================================================================================================

//Functions

