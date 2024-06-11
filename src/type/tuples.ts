// Tuples - It is a data structure that allows you to stored a fixed size collection of elements of different types.
// They are similar to arrays,
// but with a key difference: the type of elements in tuple are fixed and declared at the time of creation,
// whereas arrays can hold elements of the same type, and there size can vary.

type Person = readonly [string, number, boolean];

const person5: Person = ["ritesh", 27, true];
const person6: Person = ["pritesh", 27, false];

const personInfo = (person: Person) => {
  const [name, age, isLicense] = person;
  return `${name} age is ${age} with license ${isLicense ? "Yes" : "No"}`;
};

console.log(personInfo(person5));
console.log(personInfo(person6));
