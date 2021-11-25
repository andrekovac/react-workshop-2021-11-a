import React from 'react';
import "./App.css";
import Counters from "./components/Counters";
import MyFirstComponent from "./components/MyFirstComponent";

// eslint-disable-next-line react/prop-types
const MyText: React.FC<{ text: string }> = ({ children, text }) => (
  <p>Mein Text: {children ? children : text}</p>
)

// Declarative
const App: React.FC = () => {
  return (
    <div className="App">
      <Counters />
      <MyFirstComponent>
        <MyText text="Hallo Welt!" />
      </MyFirstComponent>
    </div>
  );
}

export default App;
