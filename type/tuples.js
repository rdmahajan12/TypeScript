// Tuples - It is a data structure that allows you to stored a fixed size collection of elements of different types.
// They are similar to arrays,
// but with a key difference: the type of elements in tuple are fixed and declared at the time of creation,
// whereas arrays can hold elements of the same type, and there size can vary.
var person5 = ["ritesh", 27, true];
var person6 = ["pritesh", 27, false];
var personInfo = function (person) {
    var name = person[0], age = person[1], isLicense = person[2];
    return "".concat(name, " age is ").concat(age, " with license ").concat(isLicense ? "Yes" : "No");
};
console.log(personInfo(person5));
console.log(personInfo(person6));
