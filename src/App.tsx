import React from "react";
import "./App.css";
import Books from "./components/Books";

// Declarative
const App: React.FC = () => {
  const [showBooks, setShowBooks] = React.useState<boolean>(true);
  return (
    <div className="App">
      <header>
        <button
          onClick={() => {
            // toggle
            setShowBooks(!showBooks);
          }}
        >
          {showBooks ? "Hide" : "Show"} Books
        </button>
      </header>

      {showBooks ? (
        <>
          <h2>Toggled Books</h2>
          <Books />
        </>
      ) : <h3><i>Toggled books are hidden!</i></h3>}
      <h2>Permanent Books</h2>
      <Books />
    </div>
  );
};

export default App;
