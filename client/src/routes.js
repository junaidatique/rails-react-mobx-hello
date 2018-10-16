import React from 'react';

import Layout from './components/Layout';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import contactStore from './store/ContactStore'

import Contacts from './components/Body/Contacts'
import AddContacts from './components/Body/AddContacts'
import ContactShow from './components/Body/ContactShow'
import UpdateContacts from './components/Body/UpdateContacts';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';


const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  contactStore: contactStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);


const Routes = () => (

  <Provider {...stores}>
    <Router history={history}>
      <Switch>
        <Layout>
          <Route exact path="/" render={() => <Redirect to="/contacts" />} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/add-contacts' component={AddContacts} />
          <Route exact path='/contacts/edit/:id' component={UpdateContacts} />
          <Route exact path='/contacts/:id' component={ContactShow} />
        </Layout>
      </Switch>
    </Router>
  </Provider>

);

export default Routes;