import { decorate, observable } from "mobx"
import { observer } from 'mobx-react'

class ContactStore {
  contacts = ["name 1", "name 2"];
  filter = ""
}
decorate(ContactStore, {
  contacts: observable,
  filter: observable
})
var contactStore = window.contactStore = new ContactStore();

export default contactStore;