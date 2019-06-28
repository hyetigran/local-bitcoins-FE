import React from "react";

import classes from "./PostSummary.css";
import Button from "../../../UI/Button/Button";
import Aux from "../../../../hoc/Aux/Aux";

class PostSummary extends React.Component {
  render() {
    // debugger;
    // console.log(this.props.posts.postData)
    // const detailSummary = Object.keys(this.props.posts.postData).map(igKey => {
    //   return (
    //     <li key={igKey}>
    //       <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
    //       {this.props.posts.postData[igKey]}
    //     </li>
    //   );
    // });
    console.log("post summmary", ...this.props.selectedPost);
    const post = { ...this.props.selectedPost };
    console.log("what is this new post", post);
    return (
      <Aux>
        <h3>Selected Deal</h3>
        {/* <ul>{detailSummary}</ul> */}
        <div>{this.props.selectedPost.postData}</div>
        <p>Send Trade Request</p>
        <Button btnType="Danger" clicked={this.props.postCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.postContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default PostSummary;
