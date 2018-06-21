import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import logo from './images/Delish-logo-01.svg';
import LoginForm from './components/forms/LoginForm';
import { rebase }from './components/config/Fire';
import { loginWithGoogle, auth, saveUser, login, logout } from './components/config/AuthHelpers';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  state = {
      authed: false,
      loading: true,
      user: null,
      /* Use for developement */
      // user: {
      //   id: 1,
      //   name: "Phil",
      //   email: "this@that.com",
      // },
    }

  // firebase loging auth
  // componentDidMount = ()=> {
    authListener = ()=> {
      rebase.initializedApp.auth().onAuthStateChanged((user) => {
  
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user,
        });
        
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: null,
        });
        // this.auth();
      }
    })
  }


  componentWillMount =()=>{
    this.authListener()
  }
  
  /* Firebase rebase */

  

  //  auth = (email, pw) => {
  //   return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
  //     .then((data) => {
  //       console.log("data is", data);
  //       this.saveUser(data);
  //     })
  // }

  // logout = () => {
  //   return rebase.initializedApp.auth().signOut()
  // }
  
  // login = (email, pw) => {
  //   return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
  // }
  

  authenticate = () =>{
    loginWithGoogle()
  
    // this.auth();
    /* for development set user */
    // this.setState({
    //   authed: true,
    // })
  }

 // register = () =>{
  //   this.authListener()
  // }

signOut = () => {
  auth.logout()
  .then(() => {
    this.setState ({
      user: null,
    });
  });
}

  changeViews = () => {
    console.log("what is changeViews state", this.state);

    if(this.state.authed){
      console.log("what is state?", this.state);
      return(
          <LandingPage user={this.state.user}/>
      )
    }else{
      console.log("changeViews: Else state");
      return(
        <section className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Collection</h1>
              <div className="App-Intro-Btns">
                  {/* <Login className="Btn-Shadow" size='large' role="button" /> */}
                  <Link to='/components/forms/LoginForm'> 
                    <Button onClick={() => this.authenticate('google')}className="Btn-Shadow" size='large' role="button">Login </Button>
                  </Link>
                  <p className="mt-3"> OR </p>
                  <Link to='/components/forms/SignUp'> 
                  <Button onClick={() => this.signOut('user')} className="Btn-Shadow"  size='large' role="button"> Logout</Button>
                  </Link>
              </div>
          </section>
      )
    }
  }

 

  render() {

    return (
      <div className="App-container" >

        {this.changeViews()}
        
        
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
