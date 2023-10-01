import React from "react";
import "../App.css";

//Оголошення кортежу для представлення інформації про книгу
let book: [string, number, boolean];

//Ініціалізація кортежу
book = ["The Catcher in the Rye", 1951, true];

//Доступ до елементів кортежу
const title: string = book[0];
const year: number = book[1];
const isAvailable: boolean = book[2];

console.log(`Title: ${title}`);
console.log(`Year: ${year}`);
console.log(`Is available: ${isAvailable}`);

console.log(book);

export default function BookTuple() {
  return (
    <div className="App">
      <div className="App-header">Hello</div>
    </div>
  );
}
