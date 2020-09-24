import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        hello
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{color: 'blue'}}>
            hello
          </div>
          Learn React
        </a>
        <HelloWorld name='harry' surname='berg'/>
      </header>
    </div>
  );
}

export default App;
