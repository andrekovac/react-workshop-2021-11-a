import React, { useState } from "react";
import "./App.css";

const WasNeues = () => <div>Chinese: 世界，你好！</div>;

const MyFirstComponent: React.FC = () => (
  <>
    <div style={{ backgroundColor: "blue", color: "white" }}>
      Hallo Welt {Math.random() > 0.5 ? "!" : "?"}
    </div>
    <div>English: Hello, world!</div>
    <WasNeues />
  </>
);

let count2 = 0;

const Counter = (props: { stopValue?: number }) => {
  console.log("render");

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    count2 += 1;
    if (!props.stopValue || (props.stopValue && count < props.stopValue)) {
      setCount(count + 1);
    }
    console.log(`Count: ${count}, count2: ${count2}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

const stopValues = [4, 2, 5];

// Declarative
function App() {
  return (
    <div className="App">
      {stopValues.map((stopValue) => (
        <Counter key={stopValue} stopValue={stopValue} />
      ))}
      <MyFirstComponent />
    </div>
  );
}

export default App;
