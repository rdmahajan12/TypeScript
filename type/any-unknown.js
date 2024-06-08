// any Type - It is most flexible type in typescript. It essentially turns off all type checking for the varibales or expressions.
// UseCases - a. Working with dynamic data.
// b. Migration form JavaScript.
// Unknown Type - It is safer alternative to any because it still enforces type checking and type safety.
// Varibales of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specify ways.
var num = 20;
num = "ritesh";
num = true;
console.log(num);
