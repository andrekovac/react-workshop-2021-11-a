import React, { useState } from "react";
import "./App.css";

const WasNeues = () => <div>Chinese: 世界，你好！</div>;

const MyFirstComponent = () => (
  <>
    <div style={{ backgroundColor: "blue", color: "white" }}>
      Hallo Welt {Math.random() > 0.5 ? "!" : "?"}
    </div>
    <div>English: Hello, world!</div>
    <WasNeues />
  </>
);

let count2 = 0;

const Counter = () => {
  console.log('render');

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    count2 += 1;
    setCount(count + 1);
    console.log(`Count: ${count}, count2: ${count2}`);
  }

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

// Declarative
function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <MyFirstComponent />
    </div>
  );
}

export default App;
