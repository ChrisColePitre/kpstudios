import logo from '../logo.svg';
import './app.css';
import Header from './util/header/header';
import { Outlet } from "react-router-dom";

function App() {
  return (
  <>
    <div className="App">
      <Header />
      <Outlet />
    </div></>
  );
}

export default App;
