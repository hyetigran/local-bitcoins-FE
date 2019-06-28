import React from "react";

import classes from "./PostSummary.css";
import Button from "../../../UI/Button/Button";
import Aux from "../../../../hoc/Aux/Aux";

class PostSummary extends React.Component {
  render() {
    const detailSummary = Object.keys(this.props.posts.postData).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.posts.postData[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Selected Deal</h3>
        <ul>{detailSummary}</ul>
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
