import React from "react";
import "../App.css";
import FileInputControlled from "../components/FileInputControlled";
import FileInputUncontrolled from "../components/FileInputUncontrolled";

// Parent Component
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>File Input</h1>
      <h2>Uncontrolled Form</h2>
      <FileInputControlled />
      <h2>Controlled Form</h2>
      <FileInputUncontrolled />
    </div>
  );
};

export default App;
