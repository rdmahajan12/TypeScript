"use strict";
// Getter-Setter - It use to control the access and modification of class properties.
// Getter methods allows you to retrieve the value of property,
// while setter methods allow you to set the value of property with additional logic or validation.
class Persons4 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 100 || age < 0) {
            throw new Error("age is invalid");
        }
        else {
            this._age = age;
        }
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age not defined");
        }
        else {
            return this._age;
        }
    }
    introduce() {
        return `I am ${this.name}. I am ${this._age} year old. My hobbies are ${this.hobbies}.`;
    }
}
const persons13 = new Persons4("ritesh", ["traveling", "reading"]);
persons13.age = 12;
console.log(persons13.introduce());
console.log(persons13.age);
