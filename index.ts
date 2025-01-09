// Implicit Types ================================================================

let usernameImplicit = 'suhail';
// usernameImplicit = 21 // This will cause an error because 'usernameImplicit' is inferred as a string

let jobSalaryImplicit = 30_000;
// jobSalaryImplicit = 'Suhail' // This will cause an error because 'jobSalaryImplicit' is inferred as a number

// Explicit Types ================================================================

let applicantNameExplicit: string = 'suhail';
let applicantEmailExplicit: string = 'suhail@gmail.com';
let applicantAgeExplicit: number = 22;
let isActiveExplicit: boolean = true;
let programmingLanguagesExplicit: string[] = ['js', 'c', 'python'];
let someNumbersExplicit: number[] = [1, 2, 43, 4, 5];
let mixedArrayExplicit: any[] = []; // Allows any type of elements

let userDetailsExplicit: { name: string, age: number } = {
    name: 'suhail',
    age: 32
};

// Interface Definition =========================================================

interface UserDetailsInterface {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

// Using the Interface ==========================================================

let userWithInterface: UserDetailsInterface = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}

// Type Alias ===================================================================

type UserDetailsTypeAlias = {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

let userWithTypeAlias: UserDetailsTypeAlias = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName() {
        console.log("Hi, I am Suhail Subair");
    }
}

// Union / Optional Types =======================================================

type UserDetailsUnionType = {
    name: string;
    age: number | string;
    salary: number | string;
    getName?: () => void;  // Optional property
}

let languagesUnion: (string | number)[] = ['js', 'c', 'python', 5, 6, 9];
let inferredLanguagesUnion = ['js', 'c', 'python', 5, 6, 9]; // Inferred types

// Functions ====================================================================

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

addNumbers(3, 5)

// Tuples =======================================================================

const tupleExample: [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(tupleExample)

// Tuples - readOnly ============================================================

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple)

// Named tuples =================================================================

const graphTuple: [x: number, y: number] = [21.1, 54.1];
console.log(graphTuple)

// Destructuring Tuples =========================================================

const graphDestructure: [x: number, y: number] = [24.7, 55.7];
const [xDestructure, yDestructure] = graphDestructure;
console.log(xDestructure, yDestructure)

// Object Types =================================================================

const carObject: { type: string, model: string, price?: number } = {
    type: "Maruthi 800",
    model: "800",
    // price:30000
}

console.log(carObject)

// Type inference ===============================================================

const carInferred = {
    type: "Toyota",
};
carInferred.type = "Maruthi 800"
console.log(carInferred.type)

// Index signature =============================================================

const nameAgeMapIndex: { [index: string]: number } = {};
nameAgeMapIndex.Jack = 25; // no error
// nameAgeMapIndex.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// Type Aliases ================================================================

type CarYearAlias = number
type CarTypeAlias = string
type CarModelAlias = string
type CarAlias = {
    year: CarYearAlias,
    type: CarTypeAlias,
    model: CarModelAlias
}

const carYearAlias: CarYearAlias = 2001
const carTypeAlias: CarTypeAlias = "Toyota"
const carModelAlias: CarModelAlias = "Corolla"
const carAlias: CarAlias = {
    year: carYearAlias,
    type: carTypeAlias,
    model: carModelAlias
};

// Interface Example ===========================================================

interface BikeInterface {
    model: number,
    color: string,
    year: number,
}

const bikeDataInterface: BikeInterface = {
    model: 213,
    color: "Blue",
    year: 2024
}

console.log(bikeDataInterface.year)

// Extending Interface =========================================================

interface NamedBikeInterface extends BikeInterface {
    name: string
}

const bikeDataExtended: NamedBikeInterface = {
    name: "Dukati",
    model: 213,
    color: "Blue",
    year: 2024
}

// Union types =================================================================

function printStatusCode(code: string | number) {
    console.log(`The status code is ${code}`)
}
console.log(printStatusCode(400))
console.log(printStatusCode("500"))

// Functions ===================================================================

function getCurrentTime(): number {
    return new Date().getTime();
}

console.log(getCurrentTime())

// Void Function ===============================================================

function printHelloWorld(): void {
    console.log("HI suhial")
}

// Function with Optional Parameter ============================================

function multiplyNumbers(a: number, b: number) {
    return a * b;
}

function additionNumbers(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// Type Casting ================================================================

let unknownVariable: unknown = 'Hellooo';
console.log((unknownVariable as string).length);
