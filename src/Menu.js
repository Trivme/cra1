import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItem from "./MenuItem";

function Menu(props) {

  return (
    <nav className='App-menu'>
        <ul>
            {props.items.map(el=> <MenuItem key = {el.text} menuItem = {el} />)}
        </ul>
    </nav>
  );
}

export default Menu;
