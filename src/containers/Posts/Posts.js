import React from "react";
import { connect } from "react-redux";

import Post from "../../components/Post/Post";
import axios from "../../axios-posts";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Posts.css";
import Button from "../../components/UI/Button/Button";

class Posts extends React.Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }

  clickHandler = () => {
    this.props.history.push("/auth");
  };

  render() {
    let posts = <Spinner />;
    if (!this.props.loading) {
      posts = this.props.posts.map(post => <Post key={post.id} {...post} />);
    }

    let landingBanner = null;
    if (!this.props.isAuth) {
      landingBanner = (
        <div className={classes.LandingBanner}>
          <h1>Buy and Sell bitcoins in Armenia</h1>
          <h2>No Fees. No KYC. No Hassle.</h2>
          <Button clicked={this.clickHandler} btnType="SignUp">
            Sign Up
          </Button>
        </div>
      );
    }
    return (
      <div>
        {landingBanner}
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Posts, axios));
