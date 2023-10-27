import React from 'react';
// importing react from react packages

import ReactDOM from 'react-dom/client';
// ReactDom from packages because we won't be using normal DOM since it reloads all the page again not specific components

import './index.css';
// importing css file

import App from './App'; 
// importing app.js file , no need to write App.js only App also works fine
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// this root is present in HTML file , all things we change in App.js will be reflected in root tag of HTML page
// using ReactDOM to get the element instead of normal DOM and also creating a root 

root.render(
  // we are saying root.render hence our html page id root will render the files stored in App.js that's why we are seeing 
  // it on the screen , rendering means fetching 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // strict mode is a type of condition of react 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
