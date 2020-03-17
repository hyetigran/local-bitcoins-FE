import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Marketing from "./views/Marketing/Marketing";

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
            <Route>2</Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
