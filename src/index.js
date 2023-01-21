import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Calculator from './Calculator';
import Fetch_api from './Fetch_api';
import Pagination from './Pagination';
import Timer from './Timer';
import Todo from './Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Calculator /> */}
    {/* <Todo /> */}
    {/* <Timer /> */}
    {/* <Fetch_api /> */}
    <Pagination />
  </React.StrictMode>
);
