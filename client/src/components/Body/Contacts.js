import React, { Component } from 'react';
import { observer } from 'mobx-react'
class Contacts extends Component {
  render() {
    
    return (
      <div>
        Contacts
        <ul>

        </ul>
      </div>
    );
  }
}
Contacts = observer(Contacts)

export default Contacts;