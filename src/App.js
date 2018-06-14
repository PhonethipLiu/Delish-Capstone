import React, { Component } from 'react';
import logo from './images/Delish-logo-01.svg';
import './App.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Box</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
