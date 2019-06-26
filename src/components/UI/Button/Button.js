/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Button.css';

const Button = props => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    disabled={props.disabled}
    onClick={props.clicked}
    >
    {props.children}
    </button>
)


export default Button;