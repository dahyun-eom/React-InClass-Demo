import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Slide 12
/*
function Tick1()
{
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>
        It is: {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
  
  root.render(element);
  //return element;
}

setInterval(Tick1, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
