import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import delish from '../images/Delish-logo-01.svg';
import './NavBar.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { loginWithGoogle, auth, saveUser, login, logout } from './config/AuthHelpers';

export default class NavBar extends React.Component {
  state = {
      isOpen: false
    };
  

  signOut = () => {
    console.log("are we signing out?");
    logout()
    .then(() => {
      this.setState ({
        user: null,
      });
    });
  }

  toggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar-header navbar-dark bg-dark">
        <Navbar color="dark" light expand="md">
          <NavbarBrand to="/">
            <img src={delish} className="Navbar-logo" alt="Delish"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/components/LandingPage/">Recipe Collection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/components/forms/RecipeForm/">Create Recipe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/components/LandingPage/" onClick={() => this.signOut()} >Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}