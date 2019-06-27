import React from "react";
import classes from "./Post.css";

// eslint-disable-next-line no-unused-vars
const Post = props => {
  //console.log('post component', props)
  return (
    <div className={classes.Post}>
      <p>Username</p>
      <p>User Rating</p>
      <p>Location</p>
      <p>{props.postData.commission}</p>
      <p>Limit</p>
      <button>Buy</button>
    </div>
  );
};

export default Post;
