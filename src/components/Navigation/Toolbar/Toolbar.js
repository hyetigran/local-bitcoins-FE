import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = () => (
  // Reminder to pass props as arg for function
  <header className={classes.Toolbar}>
    <DrawerToggle
      // Uncomment after Layout mapStateToProps
      // clicked={props.drawerToggleClicked}
      />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems
      //  Uncomment after Auth.js, auth actions and auth reducer
      //  isAuthenticated={props.isAuth}
       />
    </nav>
  </header>
);

export default Toolbar;