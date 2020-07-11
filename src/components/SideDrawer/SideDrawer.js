import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../Navigation/NavigationItems/NevigationItems';
import Logo from '../Logo/Logo';
import BackDrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Auxiliary'

const sideDrawer = (props) => {
    let atachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        atachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={atachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <NavigationItems/>
        </div>
        </Aux>
    );
}

export default sideDrawer;