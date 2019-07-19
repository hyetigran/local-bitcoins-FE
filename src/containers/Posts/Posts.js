import React from "react";
import { connect } from "react-redux";

import PostTable from "../../components/PostComponents/PostTable/PostTable";
import PostFilter from "../../components/PostComponents/PostFilter/PostFilter";
import axios from "../../axios-posts";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import classes from "./Posts.css";
import Button from "../../components/UI/Button/Button";
import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import PostSummary from "../../components/PostComponents/PostTable/PostSummary/PostSummary";

class Posts extends React.Component {
  state = {
    purchasing: false,
    selectedPost: []
  };

  componentDidMount() {
    this.props.onFetchPosts();
  }

  clickHandler = () => {
    this.props.history.push("/auth");
  };

  postSummaryHandler = id => {
    console.log("Posts", this.props.posts);
    console.log("what is id", id);
    if (this.props.isAuth) {
      const selectedPost = this.props.posts.filter(post => post.id === id);
      console.log("what is selectedPost", selectedPost);
      this.setState({ purchasing: true, selectedPost: selectedPost });
    } else {
      this.props.onSetAuthRedirectPath("/deal-info");
      this.props.history.push("/auth");
    }
  };

  postCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  postContinueHandler = () => {
    this.props.onInitPost();
    this.props.history.push("/checkout");
  };

  render() {
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

    const postSummary = (
      <PostSummary
        postCancelled={this.postCancelHandler}
        postContinued={this.postContinueHandler}
        selectedPost={this.state.selectedPost}
      />
    );

    return (
      <Aux>
        {landingBanner}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.postCancelHandler}
        >
          {postSummary}
        </Modal>
        <PostFilter />
        <PostTable
          loading={this.props.loading}
          posts={this.props.posts}
          postSummaryHandler={this.postSummaryHandler}
        />
      </Aux>
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
    onFetchPosts: () => dispatch(actions.fetchPosts()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(Path)),
    onInitPost: () => dispatch(actions.postInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Posts, axios));
