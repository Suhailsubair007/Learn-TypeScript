// Implicit Types ================================================================

let username = 'suhail';
// username = 21 // This will cause an error because 'username' is inferred as a string

let jobSalary = 30_000;
// jobSalary = 'Suhail' // This will cause an error because 'jobSalary' is inferred as a number

// Explicit Types ================================================================

let applicantName: string = 'suhail';
let applicantEmail: string = 'suhail@gmail.com';
let applicantAge: number = 22;
let isActive: boolean = true;
let programmingLanguages: string[] = ['js', 'c', 'python'];
let someNumbers: number[] = [1, 2, 43, 4, 5];
let mixedArray: any[] = []; // Allows any type of elements

let userDetails: { name: string, age: number } = {
    name: 'suhail',
    age: 32
};

// Interface Definition =========================================================

interface UserDetails {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

// Using the Interface ==========================================================

let userWithInterface: UserDetails = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}

// Type Alias ===================================================================

type UserDetailsType = {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

let userWithType: UserDetailsType = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}

// Union / Optional Types =======================================================

type UserDetailsUnion = {
    name: string;
    age: number | string;
    salary: number | string;
    getName?: () => void;  // Optional property
}

let languages: (string | number)[] = ['js', 'c', 'python', 5, 6, 9];
let inferredLanguages = ['js', 'c', 'python', 5, 6, 9]; // Inferred types

// Functions ====================================================================

// type UserDetailsFunction = {
//     name: string;
//     age: number | string;
//     salary: number | string;
//     getName?: () => void;
// }

// let userWithFunction: UserDetailsFunction = {
//     name: 'suhail dubair',
//     age: 22,
//     salary: 1200000,
//     getName() {
//         console.log("Hi, I am Suhail Subair");
//     }
// }

// function getUserName(user: UserDetailsFunction): string {
//     return user.name;
// }
// function getUserName(user: UserDetailsFunction): void {
//     console.log(user.name);
// }

// Example usage of the function
// const newValue = getUserName(userWithFunction);


// Named Type ====================================================================

// type StatusType = 'pending' | 'shipped' | 'completed';

// let currentStatus:StatusType = 'completed'


//================================================================================

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(3, 5)


//Tuples

const tuple: [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(tuple)

//Tuples - readOnly
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple)

//Named tuples
const graph: [x: number, y: number] = [21.1, 54.1];
console.log(graph)

// Destructuring Tuples
const graphDestruture: [x: number, y: number] = [24.7, 55.7];
const [x, y] = graphDestruture;
console.log(x, y)

// ObjectTYpes
const car: { type: string, model: string, price?: number } = {
    type:"Maruthi 800",
    model:"800",
    // price:30000
}

console.log(car)

//Type inference 

const car1 = {
    type:"Toyota",
};
car1.type = "Maruthi 800"
console.log(car1.type)

//Index signature 

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.