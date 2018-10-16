import { decorate, observable, computed, action } from "mobx"

class Contact {
  name
  email
  detail
  id

  constructor(name, email, detail) {
    this.name = name;
    this.email = email;
    this.detail = detail
    this.id = Date.now()
  }
}
decorate(Contact, {
  name: observable,
  email: observable
})
class ContactStore {
  contacts = [];
  filter = ""

  get filteredContacts() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.contacts.filter(contact => !this.filter || matchesFilter.test(contact.name))
  }

  createContact(name, email, detail) {
    this.contacts.push(new Contact(name, email, detail))
  }
  updateContact(id, name, email, detail) {
    let contact = this.contacts.slice().filter(contact => contact.id === parseInt(id))[0];
    contact.name = name;
    contact.email = email;
    contact.detail = detail;
    // this.contacts.push(new Contact(name, email, detail))
  }
  deleteContact(id) {
    this.updatedList = this.contacts.filter(contact => contact.id !== id)
    this.contacts.replace(this.updatedList)
  }

  getContact(id) {

    return (
      this.contacts.slice().filter(contact => contact.id === parseInt(id))[0]
    );
  }

}
decorate(ContactStore, {
  contacts: observable,
  filter: observable,
  filteredContacts: computed,
  deleteContact: action,
  getContact: action
})
var contactStore = window.contactStore = new ContactStore();

export default contactStore;