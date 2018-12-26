import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <News/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            Merhaba React :)
          </a>
        </header>
      </div>
    );
  }
}

export default App;
