import React, { useState, useEffect } from 'react';
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

const  App = (props) => {

  const [deal, setDeal] = useState(false)

  const toggleDeal = () => {
    console.log('toggling deal')
    setDeal(!deal)
  }

  const getBestOnClickHandler = () => {
    const time = 2200
    if (time > 1900) {
      return () => {
        
        const func = () => {
          console.log('hi')
        }
        console.log('goodnight')
      }
    }
    else {
      return () => {
        console.log('good day')
      }
    }
  }

  const oc = () => {
    console.log('i just ran!')
    return 'hello'
  }

  const [arr, setArr] = useState([])

  useEffect(() => {
    console.log(arr)
    console.log('yo')
    return () => {
      console.log('im unmounting')
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{
          setArr([...arr, Math.random()])
          // console.log('new array:', arr)
        }}>
          Add to array
        </button>
        <button onClick={getBestOnClickHandler()}>
          click me
        </button>
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