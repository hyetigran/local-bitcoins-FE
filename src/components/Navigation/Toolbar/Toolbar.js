/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import classes from './Toolbar.css';
//import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle
      clicked={props.drawerToggleClicked}
      />
    <div className={classes.Logo}>
      <h1>Logo Goes Here</h1>
      {/* <Logo /> */}
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems
      isAuthenticated={props.isAuth}
       />
    </nav>
  </header>
);

export default Toolbar;