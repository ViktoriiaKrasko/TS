import React from "react";
import "../App.css";

class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  //Публічний метод для обчислення площі круга
  public calculateArea = (): number => {
    return Math.PI * this.radius ** 2;
  };
}

//Example of using class Circle
const circle1 = new Circle(5);
console.log(
  `Circle 1 - Radius: ${circle1.radius}, Area: ${circle1.calculateArea()}`
); //Виведе Circle 1 - Radius: 5, Area: 78.53975

export default function CircleArea() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
