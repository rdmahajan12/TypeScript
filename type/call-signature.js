// call signature - The function call signature refers to the declaration or definition of a function.
// which includes the function name, parameters and return type.
// It defines the structure and type information of a function without including the functions implementation or body.
var student = {
    name: "ritesh",
    age: 29,
    greet: function (country) {
        return "student name is ".concat(student.name, ", age is ").concat(student.age, " and country is ").concat(country);
    },
};
console.log(student.greet("india"));
