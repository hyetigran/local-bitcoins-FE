import React from "react";
import classes from "./Post.css";
import Button from "../../../UI/Button/Button";

const Post = props => {
  console.log("Post", props.id);
  let postData = props.postData;
  return (
    <div className={classes.Post}>
      <p>Username</p>
      <p>Fee {postData.commission}%</p>
      <p>
        From ${postData.minAmount} to ${postData.maxAmount}
      </p>

      <Button
        btnType="Success"
        clicked={() => props.postSummaryHandler(props.id)}
      >
        {postData.tradeType === "Buy" ? "Buy" : "Sell"}
      </Button>
    </div>
  );
};

export default Post;
