import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling static="top">
        <NavbarBrand href="/">
          <strong>Testing</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.onClick} />
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem >
              <NavLink to="/">Contacts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="add-contacts">Add Contacts</NavLink>
            </NavItem>

          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <form className="form-inline mt-0">
                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>

    );
  }
}

export default NavHeader;