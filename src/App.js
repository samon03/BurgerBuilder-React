import { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './components/Auth/Auth';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Layout>
         <BrowserRouter>
           <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/" exact component={BurgerBuilder}/>
           </Switch>
         </BrowserRouter>
      </Layout>
     
    );
  }
}

export default App;
