import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import AboutMe from './components/about/about';
import Home from './components/homepage/home'
import MyStudio from './components/studio/studio';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from './components/portfolio/portfolio';
import Shop from './components/shop/shop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="studio" element={<MyStudio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
