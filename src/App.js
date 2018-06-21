import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import logo from './images/Delish-logo-01.svg';
import LoginForm from './components/forms/LoginForm';
import { rebase }from './components/config/Fire';
import { loginWithGoogle, auth, saveUser, login } from './components/config/AuthHelpers';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  state = {
      authed: false,
      loading: true,
      // user: null,
      /* Use for developement */
      user: {
        id: 1,
        name: "Phil",
        email: "this@that.com",
      },
    }

  // firebase loging auth
  // componentDidMount = ()=> {
  //   authListener = ()=> {
  //     rebase.initializedApp.auth().onAuthStateChanged((user) => {
  
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //         loading: false,
  //         uid: user.uid,
  //       });
        
  //       //get DB stuff for user here
  //     } else {
  //       this.setState({
  //         authed: false,
  //         loading: false,
  //         uid: null,
  //       });
  //       // this.auth();
  //     }
  //   })
  // }

  // componentWillMount =()=>{
  //   this.authListener()
  // }
  
  /* Firebase rebase */

  

   auth = (email, pw) => {
    return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
      .then((data) => {
        console.log("data is", data);
        this.saveUser(data);
      })
  }

  logout = () => {
    return rebase.initializedApp.auth().signOut()
  }
  
  login = (email, pw) => {
    return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
  }
  

  authenticate = () =>{
    // loginWithGoogle()
  
    // this.auth();
    /* for development set user */
    this.setState({
      authed: true,
    })
  }

  changeViews = () => {
    if(this.state.user){
      return(
          <LandingPage user={this.state.user}/>
      )
    }else{
      return(
        <section className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Collection</h1>
              <div className="App-Intro-Btns">
                  {/* <Login className="Btn-Shadow" size='large' role="button" /> */}
                  <Link to='/components/forms/LoginForm'> 
                    <Button onClick={() => this.authenticate('google')}className="Btn-Shadow" size='large' role="button">Login </Button>
                  </Link>
                  {/* <p className="mt-3"> OR </p>
                  <Link to='/components/forms/SignUp'> 
                  <Button onClick={() => this.register('user')} className="Btn-Shadow"  size='large' role="button"> Sign-Up</Button>
                  </Link> */}
              </div>
          </section>
      )
    }
  }

  register = () =>{
    this.authListener()
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
