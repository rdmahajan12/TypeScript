// Static - Static methods and properties belong to the class itself rather than to instances of the class.

class Math2 {
  public static PI = Math.PI;

  public static add(a: number, b: number) {
    return a + b;
  }

  public static sub(a: number, b: number) {
    return a - b;
  }
}

console.log(Math2.PI);
console.log(Math2.add(5, 10));
console.log(Math2.sub(20, 10));
