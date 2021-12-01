import React from "react";
import "../App.css";
import Books from "../components/Books";
import { useLimit } from "../context/limit";

// Parent Component
const App: React.FC = () => {
  const [showBooks, setShowBooks] = React.useState<boolean>(true);
  const { limit } = useLimit();
  return (
    <div className="App">
      <header style={{ backgroundColor: "yellow" }}>
        <p>
          Limit: <b>{limit}</b>
        </p>
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
      ) : (
        <h3>
          <i>Toggled books are hidden!</i>
        </h3>
      )}
    </div>
  );
};

export default App;
