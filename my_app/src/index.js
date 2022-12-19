import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> //자바스크립트를 엄격하게 컴파일하겠다.
    <App />
  //</React.StrictMode>
);
reportWebVitals();
