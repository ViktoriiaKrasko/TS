import React from "react";
import "../App.css";
import { StringLiteral } from "typescript";

//==================================
interface Person {
  name: string;
  age: number;
}

function isPerson(obj: any): obj is Person {
  return typeof obj === "object" && "name" in obj && "age" in obj;
}
function greet(person: any) {
  if (isPerson(person)) {
    alert(`Hello ${person.name}`);
  } else {
    alert("Invalid person object");
  }
}

greet({ name: "John", age: 29 });

//=======================================
interface Car {
  type: string;
  model: string;
  year: number;
}

function isCar(obj: any): obj is Car {
  if (typeof obj !== "object") return false;

  if ("type" in obj === false && obj.type === "custom") return false;

  if ("model" in obj === false && obj.model === "BMW") return false;

  if ("year" in obj === false && obj.year < 2000) return false;

  return true;
}

function getCar(obj: any) {
  if (isCar(obj)) {
    alert(obj.model);
  } else {
    alert("Not a car");
  }
}

getCar({ type: "car", model: "BMW", year: 1999 }); //not car
getCar({ type: "car", model: "Audi", year: 2001 }); //Audi

//================================================================
type User = {
  id: 100;
  name: string;
};

type UserList = [User, number];

const user: User = {
  id: 100,
  name: "Matthew",
};

const userList: UserList = [user, 100];

type Circle = {
  radius: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const object: Shape = { radius: 10, height: 10, width: 10 };

function getObject(object: Shape) {
  if ("radius" in object) {
    console.log(object.radius);
  }

  if ("width" in object) {
    console.log(object.width);
  }
}

getObject(object);

export default function TypeGuards() {
  return (
    <div className="App">
      <div className="App-header">Hello</div>
    </div>
  );
}
