import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { observer, inject } from 'mobx-react'

class AddContacts extends Component {
  submitForm = (e) => {
    e.preventDefault();

    this.props.contactStore.createContact(e.target.name.value, e.target.email.value, e.target.detail.value);
    this.props.history.push("/")
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <form onSubmit={this.submitForm}>
              <p className="h5 text-left mb-4">Add Contact</p>
              <div className="grey-text">
                <Input name="name" ref="name" label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
                <Input name="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                <Input name="detail" type="textarea" rows="2" label="Your message" icon="pencil" />
              </div>
              <div className="text-center">
                <Button outline type="submit" color="secondary">Save </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
AddContacts = inject("contactStore", "routing")(observer(AddContacts))
export default AddContacts;