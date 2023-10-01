import React from "react";
import "../App.css";

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  //публічний метод для виведення звуку тварини
  public makeSound = (sound: string): void => {
    console.log(`${this.name} makes a ${sound} sound.`);
  };
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  //Публічний метод для виведення породи собаки
  public displayBreed = (): void => {
    console.log(`${this.name} is a ${this.breed} dog.`);
  };

  //Публічний метод для виводу звуку, який робить собака
  public bark = (): void => {
    this.makeSound("bark");
  };
}

//Приклад використання классу Dog
const doggy = new Dog("Archie", "Corgi");

console.log(doggy.displayBreed()); //Виведе Archie is a Corgi dog

doggy.bark(); //Виведе Archie makes a bark sound.

export default function DoggyDog() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
