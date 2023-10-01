import React, { useEffect, useState } from "react";
import "../App.css";

type AppProps = {
  test: JSX.Element;
  children: React.ReactElement;
};

const App: React.FC<AppProps> = ({ test, children }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick: React.MouseEventHandler<HTMLParagraphElement> = () => {
    setCount((value) => value + 1); //можна вказувати, а можна без типу даних
  };

  useEffect(() => {
    alert(count);
  }, [count]); //не потрібно вказувати тип

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={handleClick}>Count: {count}</p>
        <p>{test}</p>
        {children}
      </header>
    </div>
  );
};

export default App;
