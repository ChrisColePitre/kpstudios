import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import Third from './third';
import reportWebVitals from './reportWebVitals';

//could I write as many ReactDOM.render functions calls as I want? Could I plug in props from an HTML element? 

ReactDOM.render(
  <React.StrictMode>
    <Third />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
