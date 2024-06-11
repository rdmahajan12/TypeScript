"use strict";
// function call signature - The function call signature refers to the declaration or definition of a function.
// which includes the function name, parameters and return type.
// It defines the structure and type information of a function without including the functions implementation or body.
const student = {
    name: "ritesh",
    age: 29,
    greet: (country) => `student name is ${student.name}, age is ${student.age} and country is ${country}`,
};
console.log(student.greet("india"));
