import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
// import Home from './components/home'
import Card from './components/universalcard'


//could I write as many ReactDOM.render functions calls as I want? Could I plug in props from an HTML element? 

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);



