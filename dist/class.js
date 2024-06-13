"use strict";
// Class - It is a blueprint for creating objects and similar things.
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I am ${this.name}. I am ${this.age} year old. My hobbies are ${this.hobbies}.`;
    }
}
const persons1 = new Persons("ritesh", 27, ["traveling", "reading"]);
const persons2 = new Persons("pritesh", 28, [
    "traveling",
    "reading",
    "drawing",
]);
console.log(persons1, persons2.introduce());
