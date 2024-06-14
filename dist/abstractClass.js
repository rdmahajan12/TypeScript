"use strict";
// Abstract class - It provide a way to define common properties and methods that multiple derived classes can share.
// This promotes code reuse and helps establish a common interface for related classes. It is not instantiated.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateCircle() {
        return Math.PI * this.radius * this.radius;
    }
    displayRes() {
        console.log(`Circle color is ${this.color} and radius is ${this.radius}`);
    }
}
const res = new Circle("red", 5);
console.log(res.calculateCircle());
res.displayRes();
