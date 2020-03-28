import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Marketing from "./views/Marketing/Marketing";
import Offers from "./views/Offers/Offers";
import Auth from "./auth/Auth";
import Referrals from "./views/Referrals/Referrals";
import PrivateRoute from "./components/Auth/PrivateRoute";
import MyTrades from "./views/MyTrades/MyTrades";
import Account from "./views/Account/Account";
import MyOffers from "./views/MyOffers/MyOffers";
import Wallet from "./views/Wallet/Wallet";
import NewOffer from "./views/NewOffer/NewOffer";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navigation isAuth={Auth.isAuthenticated()} />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" render={props => <Marketing {...props} />} />
            <Route path="/offers" render={props => <Offers {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/signup" render={props => <Signup {...props} />} />
            <Route
              path="/referral-program"
              render={props => <Referrals {...props} />}
            />
            <PrivateRoute
              path="/my-trades"
              render={props => <MyTrades {...props} />}
            />
            <PrivateRoute
              path="/my-offers"
              render={props => <MyOffers {...props} />}
            />
            <PrivateRoute
              path="/wallet"
              render={props => <Wallet {...props} />}
            />
            <PrivateRoute
              path="/my-account"
              render={props => <Account {...props} />}
            />
            {/* <PrivateRoute
              path="/new-offer"
              render={props => <NewOffer {...props} />}
            /> */}
            <Route
              path="/new-offer"
              render={props => <NewOffer {...props} />}
            />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
