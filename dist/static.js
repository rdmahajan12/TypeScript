"use strict";
// Static - Static methods and properties belong to the class itself rather than to instances of the class.
class Math2 {
    static PI = Math.PI;
    static add(a, b) {
        return a + b;
    }
    static sub(a, b) {
        return a - b;
    }
}
console.log(Math2.PI);
console.log(Math2.add(5, 10));
console.log(Math2.sub(20, 10));
