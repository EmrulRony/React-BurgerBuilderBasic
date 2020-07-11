import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummery = (props) => {
    const burgerPrice = props.totalPrice;
    const orderedIngredients = Object.keys(props.ingredients).map(key => {
        return (
            <li key={key} style={{textTransform:'capitalize'}}>{key} : {props.ingredients[key]}</li>
        )
    })
    return (
        <Aux>
            <h3>Your Order Summery</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ol>
                {orderedIngredients}
            </ol>
            <p>Total price: {burgerPrice}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummery;