import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NevigationItems';


const toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <DrawerToggle clicked={props.toggleClicked}/>
        <div className={Classes.Logo}><Logo/></div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;