import React from 'react';
import Aux from '../../../hoc/Auxiliry';
import classes from './OrderSummary.module.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
        <Aux className={classes.div}>
            <h3>Your Order : </h3>
            <p>A burger with those ingredients: </p>
            <ul>
              {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;

