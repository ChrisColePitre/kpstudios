import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './Second';
import Third from './Third';
import reportWebVitals from './reportWebVitals';

//could I write as many ReactDOM.render functions calls as I want? Could I plug in props from an HTML element? 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Second />
  </React.StrictMode>,
  document.getElementById('wat')
);

ReactDOM.render(
  <React.StrictMode>
    <Third />
  </React.StrictMode>,
  document.getElementById('wut')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
