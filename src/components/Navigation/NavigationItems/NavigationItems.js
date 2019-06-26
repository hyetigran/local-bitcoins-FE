import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Posts
    </NavigationItem>
    {!props.isAuthenticated
      ? (<NavigationItem link="/auth">Sign Up</NavigationItem>)
      : (<NavigationItem link="/logout">Logout</NavigationItem>)
    }
  </ul>
);

export default NavigationItems;