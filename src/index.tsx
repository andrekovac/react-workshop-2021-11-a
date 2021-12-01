import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CounterProvider from "./context/counter";
import { useLimitProvider } from "./context/limit";

const AppWrapper = () => {
  // usage of limitProvider hook
  const [LimitProvider, limitContextValue] = useLimitProvider();

  return (
    // usage of CounterProvider component
    <CounterProvider>
      <LimitProvider value={limitContextValue}>
        <App />
      </LimitProvider>
    </CounterProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppWrapper />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
