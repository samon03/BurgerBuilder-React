import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Layout>
         <BrowserRouter>
           <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/" exact component={BurgerBuilder}/>
           </Switch>
         </BrowserRouter>
      </Layout>
     
    );
  }
}

export default App;
