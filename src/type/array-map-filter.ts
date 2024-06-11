// map method - It creates a new array by applying a provided function to each element of the original Array. It transforms each element and returns a new array with the transformed value.
const number3: number[] = [1, 2, 3, 4, 5];
const doubleNumber: number[] = number3.map((arr: number) => arr * 2);
console.log(doubleNumber);

const convertNumber = number3.map((ele) => ele.toString());
console.log(convertNumber);

const evenNumber = number3.filter((ele) => ele % 2 === 0);
console.log(evenNumber);

const bigNumber = number3.filter((ele) => ele > 3);
console.log(bigNumber);
