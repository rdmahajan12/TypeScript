// Optional and default parameter - Optional paramenters are denoted by appending a ? symbol after the parameter name, and default parameters are specified by providing the default value in the parameter declaration.
var greet = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " this is your ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
var emp = greet("Ritesh");
var emp2 = greet("Ritesh", 2);
console.log(emp);
console.log(emp2);
