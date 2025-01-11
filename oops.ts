//class and constructor========================================================

class Car {
    model: string;
    year: number;
    price: string;

    constructor(model: string, year: number, price: string) {
        this.model = model;
        this.year = year;
        this.price = price;
    }

    drive() {
        console.log("car started.........");
    }
    stop() {
        console.log("car stopped.........");
    }
}

let c = new Car("Toyota", 2021, "$20000");
c.drive();
c.stop();
console.log(c.year)

//Inheritance====================================================================

class puchased extends Car {
    owner: string;
    constructor(model: string, year: number, price: string, owner: string) {
        super(model, year, price)
        this.owner = owner;
    }
    owner_details() {
        console.log(`${this.owner}is the owner of the car ${this.model}`)
    }
}
let purchasedCar = new puchased("Honda", 2022, "$25000", "John Doe");
purchasedCar.drive();
purchasedCar.stop();
purchasedCar.owner_details();
console.log(purchasedCar.year);

//Extends vs Implements===========================================================

interface Animal {
    name: string;
    makeSound(): void;
}
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    makeSound(): void {
        console.log("wooooooofffff")
    }
}
const mydog = new Dog('Buddyyy')
console.log(mydog.name)
mydog.makeSound();

//combiner==========================================================================

interface Flyable {
    fly(): void;
}

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// A Bird class extends Animal and implements Flyable
class Bird extends Animal implements Flyable {
    constructor(name: string) {
        super(name);
    }

    fly(): void {
        console.log(`${this.name} is flying!`);
    }
}

const myBird = new Bird("Parrot");
myBird.fly();            // Output: Parrot is flying!
console.log(myBird.name); // Output: Parrot

// Access Modifiers================================================================

class Person {
    private name: string;
    protected age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getName(): string {
        return this.name;
    }

    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private employeeId: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }

    public getEmployeeDetails(): void {
        console.log(`Name: ${this.getName()}, Age: ${this.getAge()}, Gender: ${this.gender}, Employee ID: ${this.employeeId}`);
    }
}

const emp = new Employee("Alice", 30, "Female", 12345);
emp.getEmployeeDetails();
console.log(emp.gender); // Accessible
// console.log(emp.age); // Error: Property 'age' is protected
// console.log(emp.name); // Error: Property 'name' is private


//Implemets and Extens combined example=============================================

class Classmate {
    bookName() {
        console.log("Hi, I am book 1");
    }
}

interface Book_interface {
    page: number;
}

class Book extends Classmate implements Book_interface {
    page: number;

    constructor(page: number) {
        super();
        this.page = page;
    }

    displayPage() {
        console.log(`This book has ${this.page} pages.`);
    }
}

const myBook = new Book(200);
myBook.bookName(); // Output: Hi, I am book 1
myBook.displayPage(); // Output: This book has 200 pages.

// =========================================================================================

class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

interface CanFly {
    fly(): void;
}

class SuperHero extends Parent implements CanFly {
    fly() {
        console.log("Flying!");
    }
}

const hero = new SuperHero();
hero.greet(); // Output: Hello from Parent
hero.fly();   // Output: Flying!


//======================================OVERRIDING=====================================
class A {
    print() {
        console.log('I am class A');
    }
}
class B extends A {
    print() {
        super.print()
        console.log('I am class B');
    }
}

const z = new B();
z.print() 