import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Garage from './Garage';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      <App/>
      <Garage/>
    </div>
  // </React.StrictMode>
);

reportWebVitals();
