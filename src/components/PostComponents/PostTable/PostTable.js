import React from "react";

import classes from "./PostTable.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Post from "./Post/Post";

const PostTable = props => {
  let posts = <Spinner />;
  if (!props.loading) {
    posts = props.posts.map(post => <Post key={post.id} {...post} />);
  }

  let merchant = "seller";
  if (props.posts.postType === "buyer") {
    return "buyer";
  }
  return (
    <div className={classes.PostTable}>
      <h1>Buy bitcoin in person with cash</h1>
      <div className={classes.PostHeader}>
        <div>{merchant}</div>
        <div>Limits</div>
        <div>Commission</div>
      </div>
      {posts}
    </div>
  );
};

export default PostTable;
