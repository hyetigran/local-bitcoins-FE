import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "../../views/Marketing/Marketing.scss";
import fastIcon from "../../assets/marketing/fast-icon.png";
import privateIcon from "../../assets/marketing/private-icon.webp";
import secureIcon from "../../assets/marketing/secure-icon.webp";

const MarketingBottom = (props) => {
  return (
    <div className="bottom-container">
      <div className="icons-ctn">
        <div className="container">
          <h2>Why Bitcoin.com Local?</h2>
          <div className="icons">
            <div>
              <img src={fastIcon} />
              <h3>Fast</h3>
              <p>
                Simply sign up to start trading Bitcoin Cash (BCH) instantly
                with both local and global users
              </p>
            </div>
            <div>
              <img src={privateIcon} />
              <h3>Private</h3>
              <p>
                Trade on a fully private platform. We’ll never ask you to share
                personal details with us
              </p>
            </div>
            <div>
              <img src={secureIcon} />
              <h3>Secure</h3>
              <p>
                Buy and sell with total confidence since every trade is
                protected by our encrypted blind escrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBottom;
