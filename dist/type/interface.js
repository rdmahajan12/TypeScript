"use strict";
// Interface - It allows you to define a contract for an objects shape.
// It specifies the properties and their types that an object must have to be considered of that particular
// interface type. It used for type checking during development and do not generate any JS code at runtime.
const products = {
    name: "TV",
    price: 2000,
    quantity: 10,
};
const calculateProductPrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculateProductPrice(products));
console.log("ritesh mahajan 1297");
