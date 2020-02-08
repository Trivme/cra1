import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

const items = [{
        text: 'Home',
        link: 'home-page'
    },
    {
        text: 'Product',
        link: 'goods'
    },
    {
        text: 'Service',
        link: 'serv'
    },
    {
        text: 'Contacts',
        link: 'contacts'
    }
];

function Header() {


  return (
    <header>
        <div className="container">
            <Logo/>
            <Menu items = {items}/>
        </div>
    </header>
  );
}

export default Header;
