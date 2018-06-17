import React, { Component } from 'react';
import logo from './images/Delish-logo-01.svg';
import { Button } from 'semantic-ui-react';
import './App.css';
import { Route } from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <div className="App-container">
        <section className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Box</h1>
            <div className="App-Intro-Btns">
              <Button className="Btn-Shadow" size='large' role="button">Login </Button>
              <p className="mt-3"> OR </p>
              <Button className="Btn-Shadow"  size='large' role="button"> Sign-Up</Button>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
