import React from 'react';

import Layout from './components/Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import contactStore from './store/ContactStore'

import Contacts from './components/Body/Contacts'
import AddContacts from './components/Body/AddContacts'

const Routes = () => (
  <Router>
    <Layout>
      <Route exact path='/' component={Contacts} />
      <Route exact path='/add-contacts' component={AddContacts} />
    </Layout>
  </Router>
);

export default Routes;