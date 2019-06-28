import React from "react";
import classes from "./Post.css";
import Button from "../../../UI/Button/Button";

// eslint-disable-next-line no-unused-vars
const Post = props => {
  //console.log('post component', props)
  let postData = props.postData;
  return (
    <div className={classes.Post}>
      <p>Username</p>
      <p>
        From ${postData.minAmount} to ${postData.maxAmount}
      </p>
      <p>Fee {postData.commission}%</p>
      <Button btnType="Success">Buy</Button>
    </div>
  );
};

export default Post;
