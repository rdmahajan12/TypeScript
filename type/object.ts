// Object - It used to represents the data with key value pairs. Each key in the object is a string that maps to value.

const person: {
  name: string;
  age: number;
  isAdmin: boolean;
  address: {
    city: string;
    code: number;
  };
} = {
  name: "ritesh",
  age: 27,
  isAdmin: true,
  address: {
    city: "pune",
    code: 424201,
  },
};

console.log(person);
