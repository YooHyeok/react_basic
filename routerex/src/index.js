import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

/* npm install -s react-router-dom */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Routes나 Route를 사용하기 위해서는 반드시 BrowserRouter태그로 감싸줘야한다. */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVawditals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
