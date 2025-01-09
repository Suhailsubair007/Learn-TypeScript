// Implicit Types ================================================================
var usernameImplicit = 'suhail';
// usernameImplicit = 21 // This will cause an error because 'usernameImplicit' is inferred as a string
var jobSalaryImplicit = 30000;
// jobSalaryImplicit = 'Suhail' // This will cause an error because 'jobSalaryImplicit' is inferred as a number
// Explicit Types ================================================================
var applicantNameExplicit = 'suhail';
var applicantEmailExplicit = 'suhail@gmail.com';
var applicantAgeExplicit = 22;
var isActiveExplicit = true;
var programmingLanguagesExplicit = ['js', 'c', 'python'];
var someNumbersExplicit = [1, 2, 43, 4, 5];
var mixedArrayExplicit = []; // Allows any type of elements
var userDetailsExplicit = {
    name: 'suhail',
    age: 32
};
// Using the Interface ==========================================================
var userWithInterface = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName: function () {
        console.log("Hi, I am Suhail Subair");
    }
};
var userWithTypeAlias = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName: function () {
        console.log("Hi, I am Suhail Subair");
    }
};
var languagesUnion = ['js', 'c', 'python', 5, 6, 9];
var inferredLanguagesUnion = ['js', 'c', 'python', 5, 6, 9]; // Inferred types
// Functions ====================================================================
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(3, 5);
// Tuples =======================================================================
var tupleExample = [5, true, 'The Real Coding God'];
console.log(tupleExample);
// Tuples - readOnly ============================================================
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple);
// Named tuples =================================================================
var graphTuple = [21.1, 54.1];
console.log(graphTuple);
// Destructuring Tuples =========================================================
var graphDestructure = [24.7, 55.7];
var xDestructure = graphDestructure[0], yDestructure = graphDestructure[1];
console.log(xDestructure, yDestructure);
// Object Types =================================================================
var carObject = {
    type: "Maruthi 800",
    model: "800",
    // price:30000
};
console.log(carObject);
// Type inference ===============================================================
var carInferred = {
    type: "Toyota",
};
carInferred.type = "Maruthi 800";
console.log(carInferred.type);
// Index signature =============================================================
var nameAgeMapIndex = {};
nameAgeMapIndex.Jack = 25; // no error
var carYearAlias = 2001;
var carTypeAlias = "Toyota";
var carModelAlias = "Corolla";
var carAlias = {
    year: carYearAlias,
    type: carTypeAlias,
    model: carModelAlias
};
var bikeDataInterface = {
    model: 213,
    color: "Blue",
    year: 2024
};
console.log(bikeDataInterface.year);
var bikeDataExtended = {
    name: "Dukati",
    model: 213,
    color: "Blue",
    year: 2024
};
// Union types =================================================================
function printStatusCode(code) {
    console.log("The status code is ".concat(code));
}
console.log(printStatusCode(400));
console.log(printStatusCode("500"));
// Functions ===================================================================
function getCurrentTime() {
    return new Date().getTime();
}
console.log(getCurrentTime());
// Void Function ===============================================================
function printHelloWorld() {
    console.log("HI suhial");
}
// Function with Optional Parameter ============================================
function multiplyNumbers(a, b) {
    return a * b;
}
function additionNumbers(a, b, c) {
    return a + b + (c || 0);
}
// Type Casting ================================================================
var unknownVariable = 'Hellooo';
console.log(unknownVariable.length);
