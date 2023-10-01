import React from "react";
import "../App.css";

const product: {
  readonly name: string;
  readonly price: number;
  description: string;
  manufacturer: string;
  inStock: boolean;
} = {
  name: "Laptop",
  price: 999.99,
  description: "A high-performance laptop with the latest features",
  manufacturer: "TechCo",
  inStock: true,
};

//product.name = "Desktop"; //Помилка: Cannot assign to readonly property
//product.price = 799.99; //Помилка: Cannot assign to readonly property

console.log(product);

export default function Product() {
  return (
    <div className="App">
      <div className="App-header">Hello world</div>
    </div>
  );
}
