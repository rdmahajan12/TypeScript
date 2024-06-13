"use strict";
// Access Modifier - 1. Public method we can call in parent, child and outside the class.
// 2. Protected method we can call in parent and child class but not call in outside the class.
// 3. Private method we can call only in parent class but not call in child and outside the class.
class Persons3 {
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
class Students2 extends Persons3 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `I am ${this.name}. I am ${this.age} year old.`;
    }
}
const persons123 = new Persons3("ritesh", 27, ["traveling", "reading"]);
const students123 = new Students2("pritesh", 28, ["traveling", "reading"], 12);
console.log("parent class with public, protected and private-- ", persons123.introduce());
console.log("child class with public, protected ---", students123.introduce());
console.log(persons123.name);
