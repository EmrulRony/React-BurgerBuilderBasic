import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 10,
    becon: 30,
    cheese: 20,
    meat: 100
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            becon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 50,
        purchasable: false,
        purchasing: false
    }
    addIngredient = (type) => {
        let newIngredients = { ...this.state.ingredients };
        const oldValue = newIngredients[type];
        newIngredients[type] = oldValue + 1;
        let updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredients,
            totalPrice: updatedTotalPrice
        })
    }
    removeIngredient = (type) => {
        let newIngredients = { ...this.state.ingredients };
        const oldValue = newIngredients[type];
        newIngredients[type] = oldValue - 1;
        let updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredients,
            totalPrice: updatedTotalPrice
        })
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        alert("You have continued purchase");
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummery
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler} />
                </Modal>
                <BuildControls
                    ingredientsAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    showModal={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;