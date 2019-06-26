import React from "react";

import LogoDesktop from "../../assets/images/logo-desktop.png";
import LogoMobile from "../../assets/images/logo-mobile.png";
import classes from "./Logo.css";

const width = screen.width < 500;

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    {!width ? (
      <img src={LogoDesktop} alt="Bitcoin Logo" />
    ) : (
      <img src={LogoMobile} alt="Bitcoin Logo" />
    )}
  </div>
);

export default Logo;
