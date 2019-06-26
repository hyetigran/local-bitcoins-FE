import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import Logout from './containers/Auth/Logout/Logout';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth'
import Trade from './containers/Trade/Trade';
import Orders from './containers/Orders/Orders';
import * as actions from './store/actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        {/* <Route path="/" exact component={Trade} /> */}
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
        <Route path='/auth' component={Auth} />
        <Route path="/logout" exact component={Logout} />
        {/* <Route path="/orders" exact component={Orders} />
        <Route path="/" exact component={Trade} /> */}
        <Redirect to='/' />
      </Switch>
      )
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
