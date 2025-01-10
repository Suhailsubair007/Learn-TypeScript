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
