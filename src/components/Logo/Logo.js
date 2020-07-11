import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import Classes from './Logo.module.css';

const logo = (props) => (
    <div className={Classes.Logo} style={{ height: props.height }}>
        <img src={BurgerLogo} alt="MyBurger"></img>
    </div>
);

export default logo;