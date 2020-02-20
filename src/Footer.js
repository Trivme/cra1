import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import MenuItem from "./MenuItem";

function Footer(props) {

  return (
    <footer>
        <div className="container">
            <Logo/>
            <div id='footer text' className='Footer-text'>
                Footer
              <ul className="footerMainMenu">
                {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el}/>)}
              </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
