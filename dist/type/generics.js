"use strict";
// Generic - It allow you to create reusable components or functions that can work with multiple data types.
function genericEg(value, value2) {
    return { value, value2 };
}
const numberType = genericEg(5, "Jayesh");
const stringType = genericEg("Ritesh", 4);
const booleanType = genericEg(true, "Mohini");
console.log(numberType);
console.log(stringType);
console.log(booleanType);
console.log("mau");
