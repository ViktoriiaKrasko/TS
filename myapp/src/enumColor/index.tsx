import React from "react";
import "../App.css";

//Оголошення enum для кольорів
enum COLOR {
  RED,
  GREEN,
  BLUE,
}

//Функція, яка приймає значення з enum Color і виводить повідомлення
function displayColor(color: COLOR): void {
  if (color === COLOR.RED) {
    console.log("The selected color is Red");
  } else if (color === COLOR.GREEN) {
    console.log("The selected color is Green");
  } else if (color === COLOR.BLUE) {
    console.log("The selected color is Blue");
  } else {
    console.log("Invalid color");
  }
}

//Використання enum та функції
const selectedColor: COLOR = COLOR.GREEN;
displayColor(selectedColor);

export default function enumColor() {
  return (
    <div className="App">
      <div className="App-header">Hello World</div>
    </div>
  );
}
