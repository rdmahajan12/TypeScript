// Inheritance - It allows a class to reuse the functionality of an existing class without rewriting it.

class Persons2 {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `I am ${this.name}. I am ${this.age} year old. My hobbies are ${this.hobbies}.`;
  }
}

class Students extends Persons2 {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  introduce(): string {
    return `${super.introduce()} I am in grade ${this.grade}.`;
  }
}

const students12 = new Students("ritesh", 27, ["traveling", "reading"], 12);
console.log(students12.introduce());
console.log(students12);
