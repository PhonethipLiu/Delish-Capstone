import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import logo from './images/Delish-logo-01.svg';
import Login from './components/Login';
import { rebase }from './components/config/Fire';
import { loginWithGoogle, auth, saveUser } from './components/config/AuthHelpers';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      loading: true,
      uid: null,
      img: null,
    }

    this.authenticate = this.authenticate.bind(this);
  } 

  componentDidMount() {
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {
  
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
          image: user.img,
        });
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          uid: null,
          img: null,
        })
      }
    })
  }

  componentWillMount (){
    this.authListener
  }
  
  authenticate(){
    console.log('App: calling autheticate for google');
    loginWithGoogle();
  }

  register(){
    saveUser()
  }

  render() {

    return (
      <div className="App-container" >


        <section className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Collection</h1>
              <div className="App-Intro-Btns">
                  {/* <Login className="Btn-Shadow" size='large' role="button" /> */}
                  <Link to='/components/forms/LoginForm'> 
                    <Button onClick={() => this.authenticate('google')}  className="Btn-Shadow" size='large' role="button">Login </Button>
                  </Link>
                  <p className="mt-3"> OR </p>
                  <Link to='/components/forms/SignUp'> 
                  <Button onClick={() => this.register('user')} className="Btn-Shadow"  size='large' role="button"> Sign-Up</Button>
                  </Link>
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
