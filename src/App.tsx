import React from 'react';
import './App.css';

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

// Declarative
function App() {
  return (
    <div className="App">
      <MyFirstComponent />
    </div>
  );
}

export default App;
