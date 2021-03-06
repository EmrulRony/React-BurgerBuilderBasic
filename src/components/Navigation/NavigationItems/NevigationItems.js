import React from 'react';
import NavigationItem from './NavigationItem/NevigationItem';
import classes from './NavigationItems.module.css';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Check Out</NavigationItem>
    </ul>
);

export default navigationItems;