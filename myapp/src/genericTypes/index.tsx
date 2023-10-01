import React from "react";
import "../App.css";

class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

let numberBox = new Box<number>(10);
let stringBox = new Box<string>("TypeScript");

export default function GenericTypes() {
  return (
    <div className="App">
      <div className="App-header">Hello World</div>
    </div>
  );
}
