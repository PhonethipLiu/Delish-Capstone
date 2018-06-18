import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import logo from './images/Delish-logo-01.svg';
import LoginForm from './components/forms/LoginForm';
import { fire }  from './components/config/Fire';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged( user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState ({ user: null });
      }
    });  
  }
 
  



  render() {

    return (
      <div className="App-container" >

        {this.state.user ? (<LandingPage />) : (<LoginForm />)}


        <section className="App-background">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Recipe Box</h1>
                    <div className="App-Intro-Btns">
                        <Button as={Link} to='LoginForm' className="Btn-Shadow" size='large' role="button">Login </Button>
                        <p className="mt-3"> OR </p>
                        <Button as={Link} to="/components/forms/LoginForm" className="Btn-Shadow"  size='large' role="button"> Sign-Up</Button>
                    </div>
            </section>
        
        
        {/* use this code if you want to pass props */}
        {/* <Route exact path={'/'} component={() => <LandingPage forms={this.state.forms}/>}/> */}
            
            {/* : tells you it is a dynamic route
            <Route exact path='/contactsapp/:id' component={GetContact} />
              {forms} */}
        
      </div>
    );
  }
}

export default App;
