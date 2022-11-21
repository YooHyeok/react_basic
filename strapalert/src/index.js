import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ReactstrapCarousel from './ReactstrapCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <App />
    <ReactstrapCarousel />
    </>
  // </React.StrictMode>
);

reportWebVitals();
