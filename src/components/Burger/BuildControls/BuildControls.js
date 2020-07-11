import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Becon", type: "becon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];


const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>{props.totalPrice}</strong></p>
            {
                controls.map(item => (
                    <BuildControl
                        key={item.type}
                        label={item.label}
                        added={() => props.ingredientsAdded(item['type'])}
                        removed={() => props.ingredientRemoved(item['type'])}
                        disabled={props.ingredients[`${item.type}`] === 0}
                        showModal={props.show} />
                ))
            }
            <button 
                className={classes.OrderButton}
                disabled={props.totalPrice <= 50}
                onClick={props.showModal}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;
