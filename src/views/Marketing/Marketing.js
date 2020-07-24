import React from "react";

import "./Marketing.scss";
import MarketingHero from "../../components/Marketing/MarketingHero";
import MarketingBottom from "../../components/Marketing/MarketingBottom";

const Marketing = (props) => {
  //check auth state - if logged in do not display 'create account' button
  return (
    <>
      <div className="top-intro">
        <MarketingHero />
      </div>
      <MarketingBottom />
    </>
  );
};

export default Marketing;
