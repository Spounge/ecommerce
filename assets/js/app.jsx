import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import {
  Categories,
  Category,
  Cart,
  Checkout,
  Home,
  Login,
  Order,
  PageNotFound,
  Product,
  Signup,
} from './components/screens';
import stores from './redux/stores';

import '../css/app.css';


function App() {
  return (
    <Provider store={stores.store}>
      <PersistGate loading={null} persistor={stores.persistor}>
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Categories} exact path="/category/" />
            <Route component={Category} exact path="/category/:id(\d+)" />
            <Route component={Cart} exact path="/cart" />
            <Route component={Checkout} exact path="/checkout" />
            <Route component={Login} exact path="/login" />
            <Route component={Order} path="/order/:id(\d+)" />
            <Route component={Product} path="/product/:id(\d+)" />
            <Route component={Signup} exact path="/signup" />
            <Route component={PageNotFound} path="*"/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));