import React from "react";
import { limitContext } from ".";
import "./App.css";
import Books from "./components/Books";

// Parent Component
const App: React.FC = () => {
  const [showBooks, setShowBooks] = React.useState<boolean>(true);
  const { limit: limit1 } = React.useContext(limitContext);
  return (
    <div className="App">
      <header style={{ backgroundColor: 'yellow' }}>
        <p>Limit 1: <b>{limit1}</b></p>
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
      {/* <h2>Permanent Books</h2>
      <Books limit={limit2} callback={setLimit2} /> */}
    </div>
  );
};

export default App;
