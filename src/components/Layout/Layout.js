import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliry";
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer';

class Layout extends Component {

  state = {
    showSlideDrawer: true
  }

  slideDrawerHandle = () => {
      this.setState({showSlideDrawer: false});
  }

  render() {
    return (
      <Aux>
          <Toolbar/>
          <SlideDrawer open={this.state.showSlideDrawer} closed={this.slideDrawerHandle}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
      </Aux>
    )
  }
}

export default Layout;