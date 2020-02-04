import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {


  return (
    <div className="App-header">
        <div className="App-logo">
          <Logo/>
        </div>
        <p>
            <Menu/>
        </p>
    </div>
  );
}

export default Header;
