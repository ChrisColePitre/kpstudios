import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import Home from './components/home'


//could I write as many ReactDOM.render functions calls as I want? Could I plug in props from an HTML element? 

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);



