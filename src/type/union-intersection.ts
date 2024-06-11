// Union - It allow you to specify that variable can hold values of multiple types.
// You use pipe | symbol to define a union type.

const unionExample = (value: string | number) => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid input field");
  }
};

console.log(unionExample(5));
console.log(unionExample("ritesh"));

// Intersection - It allow you to combine multiple types into a single type.
// you use & symbol to define an intersection type.

type User2 = {
  name: string;
  age: number;
};

type Location2 = {
  city: string;
  country: string;
};

const userData = {
  name: "ritesh",
  age: 27,
};

const locationData = {
  city: "Pune",
  country: "India",
};

const userInfo = (user: User2, location: Location2) => {
  return { ...user, ...location };
};

const userFullInfo: User2 & Location2 = userInfo(userData, locationData);

console.log(userFullInfo);
