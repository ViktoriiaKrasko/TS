import React from "react";
import "../App.css";

class User {
  protected canAuth = (): boolean => true;
}

class Person extends User {
  private firstName: string;
  private lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //Публічний метод для отримання певного імені
  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };

  //Приватний метод для перевірки чи особа може голосувати
  private canVote = (): boolean => {
    return this.age >= 18;
  };

  //Публічний метод для перевірки чи може особа голосувати
  checkVotingEligibility(): void {
    this.canAuth();
    if (this.canVote()) {
      console.log(`${this.getFullName()} is eligible to vote.`);
    } else {
      console.log(`${this.getFullName()} is not eligible to vote.`);
    }
  }
}

//Приклад використання классу Person
const person1 = new Person("Matthew", "McConaughey", 53);
const person2 = new Person("Iain", "Armitage", 15);

console.log(person1.getFullName()); //Виведе Matthew McConaughey
console.log(person2.getFullName()); //Виведе Iain Armitage

person1.checkVotingEligibility(); //Виведе Matthew McConaughey is eligible to vote.
person2.checkVotingEligibility(); //Виведе Iain Armitage is not eligible to vote.

export default function EligibleToVote() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
