import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliry';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
console.log("order summary");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })
        return (
            <Aux className={classes.div}>
                <h3>Your Order : </h3>
                <p>A burger with those ingredients: </p>
                <ul>
                {ingredientSummary}
                </ul>
                <p>Total price : <strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Ok</Button>
           </Aux>
        );
    }
}

export default OrderSummary;

