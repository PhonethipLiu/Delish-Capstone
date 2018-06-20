``` js
<NavBar/>
```
``` js
<Navbar color="light" light expand="md">
          <NavbarBrand href="/images/Delish-logo-01.svg" /*src={delish}*/ className="Navbar-logo" alt="Delish" > Delish </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Create Recipe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      
      ```