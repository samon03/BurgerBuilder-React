import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-order';

import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount = () => {
        axios.get('https://burger-builder-e674b-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data});
        })
        .catch(error => {
            this.setState({error: true});
        });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
           .map(igKey => {
               return ingredients[igKey];
           })
           .reduce((sum, el) => {
               return sum + el; 
           }, 0) 

           this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
           return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
       this.setState({purchasing: true});
    }

    purchaseCancleHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinue = () => {
        // alert("You want to continue?");

        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Shiliya Samon',
                address: {
                    street: 'Testtest',
                    zipcode: '2345',
                    email: 'samon@gmail.com'

                },
                delivaryMethod: 'fastest'
            }
        }
       axios.post('/orders.json', order)
       .then(response => {
           console.log(response);
           this.setState({loading: false, purchasing: false});
       })
       .catch(err => {
            this.setState({loading: false, purchasing: false});
            console.log(err);
       })

     }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can'r be loaded </p> : <Spinner/>;

        if(this.state.ingredients)
        {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} 
                        />
                </Aux>
            );

            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCancleHandler}
                purchaseContinue={this.purchaseContinue}
                price={this.state.totalPrice}/>
        }

        if(this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
           <Aux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                   {orderSummary}
               </Modal>
               {burger}
           </Aux>
        );
    }
}

export default errorHandler(BurgerBuilder, axios);