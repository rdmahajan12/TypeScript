class Temp {
  private _celsius = 0;

  public get celsius() {
    return this._celsius;
  }

  public set celsius(newCel) {
    this._celsius = newCel;
  }

  public get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  public set fahrenheit(newFah) {
    this._celsius = ((newFah - 32) * 5) / 9;
  }
}

const temp = new Temp();
temp.celsius = 25;
console.log(temp.fahrenheit);

temp.fahrenheit = 77;
console.log(temp.celsius);
