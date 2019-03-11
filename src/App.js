import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to p i z z a.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I AM BANANA
          </a>
        </header>
      </div>
    );
  }
}

export default App;
