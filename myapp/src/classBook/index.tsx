import React from "react";
import "../App.css";

class Book {
  public title: string;
  public author: string;
  public ratings: number[];

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.ratings = [];
  }

  public addRating = (rating: number): void => {
    if (rating >= 1 && rating <= 5) {
      this.ratings.push(rating);
      console.log(`Rating ${rating} added for ${this.title}`);
    } else {
      console.log(`Invalid rating. Please provide rating between 1 and 5`);
    }
  };

  public getAverageRating(): number {
    if (this.ratings.length === 0) {
      return 0;
    }

    const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratings.length;
  }

  public displayInfo(): void {
    console.log(`Title ${this.title}, Author ${this.author}`);
  }
}

//Example of using class Book
const book1 = new Book("The Catcher in the Rye", "J.D.Salinger");
const book2 = new Book("To kill a Mockingbird", "Harper Lee");

book1.addRating(4);
book1.addRating(5);
book2.addRating(3);

console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`);
console.log(`Average rating for ${book2.title}: ${book2.getAverageRating()}`);

book1.displayInfo(); //Виведе: Title:The Catcher in the Rye, Author: J.D.Salinger
book2.displayInfo(); //Виведе: Title:To kill a Mockingbird, Author: Harper Lee

export default function BookRates() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
