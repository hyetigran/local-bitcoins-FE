import React from "react";
import { connect } from "react-redux";

import Post from "../../components/Post/Post";
import axios from "../../axios-posts";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Posts.css";

class Posts extends React.Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }
  render() {
    let posts = <Spinner />;
    if (!this.props.loading) {
      posts = this.props.posts.map(post => <Post key={post.id} {...post} />);
    }
    return <div>{posts}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    loading: state.post.loading
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
