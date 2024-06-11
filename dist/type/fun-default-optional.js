"use strict";
// Optional and default parameter - Optional paramenters are denoted by appending a ? symbol after the parameter name, and default parameters are specified by providing the default value in the parameter declaration.
const greet = (name, id) => {
    if (id) {
        return `Welcome, ${name} this is your ${id}`;
    }
    else {
        return `Welcome, ${name}`;
    }
};
const emp = greet("Ritesh");
const emp2 = greet("Ritesh", 2);
console.log(emp);
console.log(emp2);
