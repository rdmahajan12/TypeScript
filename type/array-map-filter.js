// map method - It creates a new array by applying a provided function to each element of the original Array. It transforms each element and returns a new array with the transformed value.
var number3 = [1, 2, 3, 4, 5];
var doubleNumber = number3.map(function (arr) { return arr * 2; });
console.log(doubleNumber);
var convertNumber = number3.map(function (ele) { return ele.toString(); });
console.log(convertNumber);
var evenNumber = number3.filter(function (ele) { return ele % 2 === 0; });
console.log(evenNumber);
var bigNumber = number3.filter(function (ele) { return ele > 3; });
console.log(bigNumber);
