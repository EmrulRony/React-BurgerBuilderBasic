import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const burgerIngredient = processIngredient(props.ingredients); 
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {burgerIngredient }
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

const processIngredient = (ingredients) => {
    let ingredientArray = [];
    for (const item in ingredients) {
        if (ingredients[item] > 0) {
            for (let i = 1; i <= ingredients[item]; i++) {
                ingredientArray.push(<BurgerIngredient key={item + i} type={item}/>);
            }
        }
    }

    if (ingredientArray.length === 0) {
        return "Please add some ingredients!";
    }
    return ingredientArray;
}

export default burger;
