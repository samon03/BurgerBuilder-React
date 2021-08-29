import React from 'react';
import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <Ingredients type="bread-top"/>
            <Ingredients type="cheese"/>
            <Ingredients type="meat"/>
            <Ingredients type="bread-bottom"/>
        </div>
    )
}

export default burger;