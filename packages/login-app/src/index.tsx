import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login1 } from './routes/login1';
import { Login2 } from './routes/login2';
import { Login3 } from './routes/login3';
import { Login4 } from './routes/login4';
import { Login5 } from './routes/login5';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="login1" element={<Login1 />} />
        <Route path="login2" element={<Login2 />} />
        <Route path="login3" element={<Login3 />} />
        <Route path="login4" element={<Login4 />} />
        <Route path="login5" element={<Login5 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
