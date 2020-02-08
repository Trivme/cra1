import React from 'react';
import logo from './logo.svg';
import './App.css';

function MenuItem(props) {

    console.log(props);

  return (
    <a className='App-menu-item'>
        <a
            href={props.menuItem.link}> {props.menuItem.text}
        </a>
    </a>
  );
}

export default MenuItem;
