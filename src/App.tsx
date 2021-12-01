import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import BooksScreen from "./screens/BooksScreen";
import FilesScreen from "./screens/FilesScreen";

// Parent Component
const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <h2>Menu</h2>
        <div><Link to="/">BooksScreen</Link></div>
        <div><Link to="/files">File Upload</Link></div>
        <div><Link to="/counter">Counter</Link></div>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          <BooksScreen />
        </Route>
        <Route strict exact path="/files">
          <FilesScreen />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
      <hr />

    </div>
  );
};

export default App;
