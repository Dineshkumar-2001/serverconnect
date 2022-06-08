import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter, Route } from 'react-router-dom';
import Table_data from './FlipCard/Table_data';
import Table_task from './FlipCard/Table_task';
import Mui_table from './FlipCard/Mui_table';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   
   <App/>
   {/* <Table_data/> */}
   {/* <Table_task/> */}
    {/* <Mui_table/> */}
  
     </BrowserRouter>
   
    

  
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
