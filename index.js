// Infer types (Implicit types)
var username = 'suhail';
// username = 21 // This will cause an error because 'username1' is inferred as a string
var job_salary = 30000;
var userDetails = {
    name: 'suhail dubair',
    age: 22,
    salary: 1200000,
    getName: function () {
        console.log("Hi i am suhail subair");
    }
};
console.log(userDetails);
