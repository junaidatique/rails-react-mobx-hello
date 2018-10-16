import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { observer, inject } from 'mobx-react'
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
  filter(e) {
    this.props.contactStore['filter'] = e.target.value
  }
  render() {
    const { filter } = this.props.contactStore;
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
                <input className="form-control mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search" value={filter} onChange={this.filter.bind(this)} />
              </form>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>

    );
  }
}
NavHeader = inject("contactStore")(observer(NavHeader))
export default NavHeader;