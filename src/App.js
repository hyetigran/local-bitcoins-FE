import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Marketing from "./views/Marketing/Marketing";
import Offers from "./views/Offers/Offers";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" render={props => <Marketing {...props} />} />
            <Route path="/offers" render={props => <Offers {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/signup" render={props => <Signup {...props} />} />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
