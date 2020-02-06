import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";

function Footer() {

  return (
    <footer>
        <div className="container">
            <Logo/>
            <div id='footer text' className='Footer-text'>
                Footer
            </div>
        </div>
    </footer>
  );
}

export default Footer;
