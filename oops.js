//class and constructor========================================================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    Car.prototype.drive = function () {
        console.log("car started.........");
    };
    Car.prototype.stop = function () {
        console.log("car stopped.........");
    };
    return Car;
}());
var c = new Car("Toyota", 2021, "$20000");
c.drive();
c.stop();
console.log(c.year);
//Inheritance====================================================================
var puchased = /** @class */ (function (_super) {
    __extends(puchased, _super);
    function puchased(model, year, price, owner) {
        var _this = _super.call(this, model, year, price) || this;
        _this.owner = owner;
        return _this;
    }
    puchased.prototype.owner_details = function () {
        console.log("".concat(this.owner, "is the owner of the car ").concat(this.model));
    };
    return puchased;
}(Car));
var purchasedCar = new puchased("Honda", 2022, "$25000", "John Doe");
purchasedCar.drive();
purchasedCar.stop();
purchasedCar.owner_details();
console.log(purchasedCar.year);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("wooooooofffff");
    };
    return Dog;
}());
var mydog = new Dog('Buddyyy');
console.log(mydog.name);
mydog.makeSound();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// A Bird class extends Animal and implements Flyable
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying!"));
    };
    return Bird;
}(Animal));
var myBird = new Bird("Parrot");
myBird.fly(); // Output: Parrot is flying!
console.log(myBird.name); // Output: Parrot
// Access Modifiers================================================================
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, employeeId) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        console.log("Name: ".concat(this.getName(), ", Age: ").concat(this.getAge(), ", Gender: ").concat(this.gender, ", Employee ID: ").concat(this.employeeId));
    };
    return Employee;
}(Person));
var emp = new Employee("Alice", 30, "Female", 12345);
emp.getEmployeeDetails();
console.log(emp.gender); // Accessible
// console.log(emp.age); // Error: Property 'age' is protected
// console.log(emp.name); // Error: Property 'name' is private
//Implemets and Extens combined example=============================================
var Classmate = /** @class */ (function () {
    function Classmate() {
    }
    Classmate.prototype.bookName = function () {
        console.log("Hi, I am book 1");
    };
    return Classmate;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(page) {
        var _this = _super.call(this) || this;
        _this.page = page;
        return _this;
    }
    Book.prototype.displayPage = function () {
        console.log("This book has ".concat(this.page, " pages."));
    };
    return Book;
}(Classmate));
var myBook = new Book(200);
myBook.bookName(); // Output: Hi, I am book 1
myBook.displayPage(); // Output: This book has 200 pages.
// =========================================================================================
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.greet = function () {
        console.log("Hello from Parent");
    };
    return Parent;
}());
var SuperHero = /** @class */ (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperHero.prototype.fly = function () {
        console.log("Flying!");
    };
    return SuperHero;
}(Parent));
var hero = new SuperHero();
hero.greet(); // Output: Hello from Parent
hero.fly(); // Output: Flying!
//======================================OVERRIDING=====================================
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.print = function () {
        console.log('I am class A');
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('I am class B');
    };
    return B;
}(A));
var z = new B();
z.print();
