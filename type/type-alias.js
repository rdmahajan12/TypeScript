// type alias - It is a way to give a name to a specific type or combination of types.
// It allows you to create a custom name for a type,
// making it easier to reuse and refer to the same type in different part of your code.
// It provide better readability, organization, and abstraction of complex type.
var product = {
    name: "Laptop",
    price: 500,
    quantity: 5,
};
console.log(product);
var totalPrice = function (product) {
    return "".concat(product.name, " total price ").concat(product.price * product.quantity);
};
console.log(totalPrice(product));
