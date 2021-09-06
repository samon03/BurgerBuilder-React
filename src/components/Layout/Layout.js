import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliry";
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer';

class Layout extends Component {

  state = {
    showSlideDrawer: false
  }

  slideDrawerHandle = () => {
      this.setState({showSlideDrawer: false});
  }

  slideDrawerToggleHandle = () => {
    this.setState((preState) => {
      return {showSlideDrawer: !preState.showSlideDrawer}
    });
  }

  render() {
    return (
      <Aux>
          <Toolbar drawerToggleClicked={this.slideDrawerToggleHandle}/>
          <SlideDrawer open={this.state.showSlideDrawer} closed={this.slideDrawerHandle}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
      </Aux>
    )
  }
}

export default Layout;