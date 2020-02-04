import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";

function Footer() {

  return (
    <div className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <p className="Footer-text">
            Footer
        </p>
    </div>
  );
}

export default Footer;
