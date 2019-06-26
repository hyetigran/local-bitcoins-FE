import React from "react";
import { connect } from "react-redux";

import classes from "./PostCreator.css";
import { updateObject, checkValidity } from "../../shared/utility";
import axios from "../../axios-posts";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

class PostCreator extends React.Component {
  state = {
    postForm: {
      tradeType: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "Buy", displayValue: "Buy bitcoins" },
            { value: "Sell", displayValue: "Sell your bitcoins" }
          ]
        },
        value: "Buy",
        validation: {},
        valid: true
      },
      minAmount: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Minimum Amount"
        },
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 10,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      maxAmount: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Maximum Amount"
        },
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 10,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      commission: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your commission"
        },
        value: "",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 5,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      tradeTerms: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Other information you wish to tell about your trade."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  postHandler = event => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.postForm) {
      formData[formElementIdentifier] = this.state.postForm[
        formElementIdentifier
      ].value;
    }
    const post = {
      // username: this.props.username, (from redux)
      postData: formData,
      userId: this.props.userId
    };
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.postForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.postForm[inputIdentifier].validation
        ),
        touched: true
      }
    );
    const updatedPostForm = updateObject(this.state.postForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedPostForm) {
      formIsValid = updatedPostForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ postForm: updatedPostForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.postForm) {
      formElementsArray.push({
        id: key,
        config: this.state.postForm[key]
      });
    }
    let form = (
      <form onSubmit={this.postHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Post Trade
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.PostCreator}>
        <h4>Create a bitcoin trade advertisement</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //filler
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(PostCreator, axios));
