import React from "react";
import "./App.css";

function App() {
  let age: number = 30; //number

  let height: number = 175; // number

  let name: string = "Viktoriia";

  const getSpace = (num: number): string => `${num * 4}px`;

  return (
    <div className="App">
      <header className="App-header">
        Hello, my name is {name}, I am {age} years old. I am {height} cm tall.
        <p>{getSpace(4)}</p>
      </header>
    </div>
  );
}

export default App;
