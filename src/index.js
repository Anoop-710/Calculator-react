import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Calculator from './Calculator';
import Todo from './Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Calculator /> */}
    <Todo />
  </React.StrictMode>
);
