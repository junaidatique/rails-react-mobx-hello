import React, { Component } from 'react';
import Header from './header/Header';

import { Container } from 'mdbreact'
class Layout extends Component {
  constructor(props) {
    super()
    this.props = props
  }
  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;