import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type LimitContextT = {
  limit: number;
  setLimit: (limit: number) => void;
}

export const limitContext = React.createContext<LimitContextT>({
  limit: 0,
  setLimit: () => null
});

const AppWrapper = () => {
  const [limit, setLimit] = useState(0);
  
  const limitValue = {
    limit,
    setLimit,
  }

  return (
    <limitContext.Provider value={limitValue}>
      <App />
    </limitContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
