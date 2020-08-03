import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch } from "react-redux";

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
import OfferFormContainer from "./views/OfferFormContainer/OfferFormContainer";
import OfferDetails from "./views/OfferDetails/OfferDetails";
import OrderDetails from "./views/OrderDetails/OrderDetails";
import UserProfile from "./views/UserProfile/UserProfile";
import Footer from "./components/Footer/Footer";
import { fetchMyOffers } from "./store/actions/myOffersActions";

const { Header, Content } = Layout;

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyOffers());
  });
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navigation isAuth={Auth.isAuthenticated()} />
        </Header>
        <Content>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Marketing {...props} />}
            />
            <Route path="/offers" render={(props) => <Offers {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/signup" render={(props) => <Signup {...props} />} />
            <Route
              path="/referral-program"
              render={(props) => <Referrals {...props} />}
            />
            <Route
              path="/offer-details/:offerId"
              render={(props) => <OfferDetails {...props} />}
            />
            <PrivateRoute
              path="/my-trades"
              render={(props) => <MyTrades {...props} />}
            />
            <PrivateRoute
              path="/my-offers"
              render={(props) => <MyOffers {...props} />}
            />
            <PrivateRoute
              path="/wallet"
              render={(props) => <Wallet {...props} />}
            />
            <PrivateRoute
              path="/my-account"
              render={(props) => <Account {...props} />}
            />
            <PrivateRoute
              path="/new-offer"
              render={(props) => <OfferFormContainer {...props} />}
            />
            <PrivateRoute
              path="/edit-offer/:offerId"
              render={(props) => <OfferFormContainer {...props} />}
            />
            <PrivateRoute
              path="/user-profile/:username"
              render={(props) => <UserProfile {...props} />}
            />
            <PrivateRoute
              path="/trade/:type/:id"
              render={(props) => <OrderDetails {...props} />}
            />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
