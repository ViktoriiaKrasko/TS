import React from "react";
import "../App.css";

class Counter {
  count: number = 0;

  increment() {
    this.count++;
  }
}

function IncrementMixin<
  T extends new (...args: any[]) => {
    increment: (...args: any[]) => any;
    count: number;
  }
>(Base: T) {
  return class extends Base {
    incrementAndLog() {
      this.increment();
      console.log(`Count is ${this.count}`);
    }
  };
}

const countingCounter = IncrementMixin(Counter);

const counter = new countingCounter();
counter.incrementAndLog();

export default function Mixins() {
  return (
    <div className="App">
      <div className="App-header">Hello World</div>
    </div>
  );
}
