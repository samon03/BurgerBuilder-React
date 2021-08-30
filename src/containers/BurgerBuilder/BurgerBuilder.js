import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            salad: 0,
            meat: 0
        }
    }
    render() {
        return (
           <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <div>Burger Controls</div>
           </Aux>
        );
    }
}

export default BurgerBuilder;