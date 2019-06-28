import React from "react";

import classes from "./PostTable.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Post from "./Post/Post";

const PostTable = props => {
  let posts = <Spinner />;
  if (!props.loading) {
    posts = props.posts.map(post => <Post key={post.id} {...post} />);
  }
  return (
    <div className={classes.PostTable}>
      <h1>Buy bitcoin in person with cash</h1>
      {posts}
    </div>
  );
};

export default PostTable;
