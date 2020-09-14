import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld"
import Product, { num } from "./Product"

const products = [
  {
    title: 'phone',
    price: 10,
  },
  {
    title: 'headphone',
    price: 100
  }
]

function App() {

  const [deal, setDeal] = useState(false)

  const toggleDeal = () => {
    console.log('toggling deal')
    setDeal(!deal)
  }
  
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
          Learn React
        </a>
        <HelloWorld name='harry' surname='berg'/>
        {products.map(
          p => <Product {...p} deal={deal}/>
        )}
        <button onClick={toggleDeal}>toggle deal</button>
      </header>
    </div>
  );
}

export default App;