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
  state = {
      authed: false,
      loading: true,
      user: {
        id: 1,
        name: "Phil",
        email: "this@that.com",
      },
      img: null,
    }

  componentDidMount() {
  //   this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {
  
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //         loading: false,
  //         uid: user.uid,
  //         image: user.img,
  //       });
  //       //get DB stuff for user here
  //     } else {
  //       this.setState({
  //         authed: false,
  //         loading: false,
  //         uid: null,
  //         img: null,
  //       })
  //     }
  //   })
  }

  // componentWillMount (){
  //   this.authListener
  // }
  

  // if auth

  authenticate = () =>{
    console.log('App: calling autheticate for google');
    // loginWithGoogle();
    this.setState({
      authed: true,
    })
  }

  changeViews = () =>{
    if(this.state.authed){
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
                    <Button onClick={() => this.authenticate('google')}  className="Btn-Shadow" size='large' role="button">Login </Button>
                  </Link>
                  <p className="mt-3"> OR </p>
                  <Link to='/components/forms/SignUp'> 
                  <Button onClick={() => this.register('user')} className="Btn-Shadow"  size='large' role="button"> Sign-Up</Button>
                  </Link>
              </div>
          </section>
      )
    }
  }

  register = () =>{
    saveUser()
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
