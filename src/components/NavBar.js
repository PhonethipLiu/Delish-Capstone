import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import delish from '../images/Delish-logo-01.svg';
import './NavBar.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
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
                <NavLink to="/components/LandingPage/">Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}