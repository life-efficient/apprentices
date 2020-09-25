import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld"
import Greeting from './Greeting';
import NameBadge from './NameBadge';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting />
                <NameBadge name='Harry' />
            </header>
        </div>
    );
}

export default App;
