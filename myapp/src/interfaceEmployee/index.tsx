import React from "react";
import "../App.css";

interface Person {
  firstName: string;
  lastName: string;
}

//Оголошення інтерфейсу для співробітників
interface Employee {
  role: string;
  getSalary: () => number;
}

//Клас, що представляє менеджера
class Manager implements Employee, Person {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Manager";
    this.salary = 50000; //Початкова ЗП для менеджера
  }

  getSalary = (): number => {
    return this.salary;
  };
}

//Клас, що представляє розробника
class Developer implements Employee, Person {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Developer";
    this.salary = 100000; //Початкова ЗП для девелопера
  }

  getSalary = (): number => {
    return this.salary;
  };
}

const manager1 = new Manager("Maya", "Smith");
const developer1 = new Developer("Jack", "Jameson");

console.log(
  `${manager1.firstName} ${manager1.lastName} is a ${
    manager1.role
  } and has a salary of ${manager1.getSalary()}$/year`
);
console.log(
  `${developer1.firstName} ${developer1.lastName} is a ${
    developer1.role
  } and has a salary of ${developer1.getSalary()}$/year`
);

export default function ManagerImplementations() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
