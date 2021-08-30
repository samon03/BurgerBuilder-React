import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BurgerIngredients key={igKey + i} type={igKey} />
            })
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
             {transformIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;