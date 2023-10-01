import React from "react";
import "../App.css";

type User = {
  id: number;
  email: string;
};

type Robot = {
  code: number;
  version: string;
};

type Admin = User & {
  role: number;
};

type Entity<T> = T extends User | Admin ? T : Robot;

const contentEditor: Entity<Admin> = {
  id: 2124,
  email: "kdjghjk@mail.com",
  role: 2,
};

const unknownUser: Entity<{ test: 123 }> = {
  code: 145415,
  version: "15.15",
};

//============================================
type HasLength<T, L extends number> = T extends { length: L } ? true : false;

const has3Length: HasLength<[1, 2, 3], 3> = true; //true
const has5Length: HasLength<string[], 5> = false; //false

//===============================================

type isFunction<T> = T extends (...args: any[]) => any ? T : null;

const name = "Matthew";

const handleChange = () => alert("click");

const myFunction: isFunction<typeof handleChange> = handleChange;

//==================================================
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person2 = { name: "Matthew", age: 30 };
const name2 = getProperty(person2, "name");

export default function ConditionalTypes() {
  return (
    <div className="App">
      <div className="App-header">Hello World</div>
    </div>
  );
}
