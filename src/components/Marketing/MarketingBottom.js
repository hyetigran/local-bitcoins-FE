import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "../../views/Marketing/Marketing.scss";
import fastIcon from "../../assets/marketing/fast-icon.png";
import privateIcon from "../../assets/marketing/private-icon.webp";
import secureIcon from "../../assets/marketing/secure-icon.webp";
import paymentIcon from "../../assets/marketing/payment.webp";
import encryptionIcon from "../../assets/marketing/encryption.webp";
import nonCustodialIcon from "../../assets/marketing/non-custodial.webp";
import howItWorksIcon from "../../assets/marketing/how-it-works.png";
import howItWorks2Icon from "../../assets/marketing/how-it-works-2.png";
import howItWorks3Icon from "../../assets/marketing/how-it-works-3.png";

const MarketingBottom = (props) => {
  return (
    <div className="bottom-container">
      <div className="icons-ctn">
        <div className="container">
          <h2>Why Bitcoin.com Local?</h2>
          <div className="icons">
            <div>
              <img src={fastIcon} alt="icon" />
              <h3>Fast</h3>
              <p>
                Simply sign up to start trading Bitcoin Cash (BCH) instantly
                with both local and global users
              </p>
            </div>
            <div>
              <img src={privateIcon} alt="icon" />
              <h3>Private</h3>
              <p>
                Trade on a fully private platform. We’ll never ask you to share
                personal details with us
              </p>
            </div>
            <div>
              <img src={secureIcon} alt="icon" />
              <h3>Secure</h3>
              <p>
                Buy and sell with total confidence since every trade is
                protected by our encrypted blind escrow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-method">
        <div className="container">
          <div className="content-block">
            <div className="content-block-left">
              <h2>
                Supports <span>ANY</span> payment method
              </h2>
              <p>
                Unlike many exchanges with limited base pairs and currency
                options, Bitcoin.com Local can create a trade with any payment
                method. You can even open a trade for items or services!
              </p>
            </div>
            <div className="content-block-image-ctn">
              <img src={paymentIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="custodial-method">
        <div className="container">
          <div className="content-block">
            <div className="content-block-image-ctn right">
              <img src={nonCustodialIcon} alt="icon" />
            </div>
            <div className="content-block-left">
              <h2>Fully non-custodial</h2>
              <p>
                We don’t ever store the coins you buy or sell. Instead, our
                encrypted blind escrow contract acts as the decentralized
                go-between for your trades. This means more control and less
                risk for your coins.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="encryption-method">
        <div className="container">
          <div className="content-block">
            <div className="content-block-left">
              <h2>Protected by encryption</h2>
              <p>
                All messages sent on Bitcoin.com Local are end-to-end encrypted.
                This robust means of communication security keeps messages
                between buyer and seller private. We can only ever see messages
                if a dispute is opened up.
              </p>
            </div>
            <div className="content-block-image-ctn encryption-icon">
              <img src={encryptionIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div className="container">
          <h2>How does Bitcoin.com Local work?</h2>
          <div className="content-block-ctn step-1">
            <div className="content-block">
              <div className="content-block-left">
                <h3>1. View buy and sell listings</h3>
                <p>
                  Browse existing listings from other users looking to either
                  buy or sell Bitcoin Cash in-person or online. You can refine
                  results by location, payment method, reviews, and more.
                </p>
              </div>
              <div className="content-block-image-ctn">
                <img src={howItWorksIcon} alt="icon" />
              </div>
            </div>
          </div>
          <div className="content-block-ctn step-2">
            <div className="content-block">
              <div className="content-block-image-ctn right">
                <img src={howItWorks2Icon} alt="icon" />
              </div>
              <div className="content-block-left">
                <h3>2. Start the trading process</h3>
                <p>
                  Open a trade with an existing buyer or seller if you’ve found
                  a listing that suits your budget. If not, create your own and
                  publish it to our platform for other traders to see.
                </p>
              </div>
            </div>
          </div>
          <div className="content-block-ctn step-3">
            <div className="content-block">
              <div className="content-block-left">
                <h3>3. Complete your BCH trade</h3>
                <p>
                  If you’re buying, send payment directly to the seller; if
                  you’re selling, send Bitcoin Cash to our blind escrow. Once
                  payment is received by the seller, the BCH is released to the
                  buyer.
                </p>
              </div>
              <div className="content-block-image-ctn">
                <img src={howItWorks3Icon} alt="icon" />
              </div>
            </div>
          </div>
          <h2 className="start-trading">Start trading today!</h2>
          <div style={{ textAlign: "center" }}>
            <Link to="/signup">
              <Button sise="large" type="primary">
                Create account
              </Button>
            </Link>
            <Link to="/offers">
              <Button sise="large">Browse listings</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBottom;
