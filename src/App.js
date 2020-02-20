import React from 'react';

import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

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
  },
  {
    text: 'Orders',
    link: 'orders'
  }
];

function App(props) {
  return (
    <div className="App">
      <Header menuItems = {items}/>
      <Content/>
      <Footer menuItems = {items}/>
    </div>
  );
}

export default App;
