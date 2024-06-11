"use strict";
// Union - It allow you to specify that variable can hold values of multiple types.
// You use pipe | symbol to define a union type.
const unionExample = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input field");
    }
};
console.log(unionExample(5));
console.log(unionExample("ritesh"));
const userData = {
    name: "ritesh",
    age: 27,
};
const locationData = {
    city: "Pune",
    country: "India",
};
const userInfo = (user, location) => {
    return { ...user, ...location };
};
const userFullInfo = userInfo(userData, locationData);
console.log(userFullInfo);
