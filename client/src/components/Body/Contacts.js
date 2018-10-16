import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Table, TableHead, TableBody, Button, Fa } from 'mdbreact'
class Contacts extends Component {
  deleteContact(contact) {
    this.props.contactStore.deleteContact(contact.id)
  }
  render() {
    const { filteredContacts } = this.props.contactStore;
    return (
      <div>
        <h2>Contacts</h2>
        <Table>
          <TableHead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </TableHead>
          <TableBody >
            {filteredContacts.map(contact =>
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>
                  <Link to={`/contacts/${contact.id}`} color="primary"><Fa icon="eye" /></Link>
                  <Link to={`/contacts/edit/${contact.id}`} color="primary"><Fa icon="edit" /></Link>
                  <Button color="danger" onClick={this.deleteContact.bind(this, contact)}><Fa icon="trash" /></Button>
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
        <ul>

        </ul>
      </div>
    );
  }
}

Contacts = inject("contactStore")(observer(Contacts))

export default Contacts;