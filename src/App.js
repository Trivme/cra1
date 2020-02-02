import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // JSX

  const name = 'Jonny English';

  return (
    <div className="App">
      <header className="App-header">

        <h1>REACT APP</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
