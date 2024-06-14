// Abstract class - It provide a way to define common properties and methods that multiple derived classes can share.
// This promotes code reuse and helps establish a common interface for related classes. It is not instantiated.

abstract class Shape {
  constructor(protected color: string) {}

  abstract calculateCircle(): number;
  abstract displayRes(): void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }

  public calculateCircle(): number {
    return Math.PI * this.radius * this.radius;
  }

  public displayRes(): void {
    console.log(`Circle color is ${this.color} and radius is ${this.radius}`);
  }
}

const res = new Circle("red", 5);
console.log(res.calculateCircle());
res.displayRes();
