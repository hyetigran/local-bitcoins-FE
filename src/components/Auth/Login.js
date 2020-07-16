import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { doLogin } from "../../store/actions/authActions";
import "./Login.scss";

const Login = (props) => {
  const onFinish = (values) => {
    props.doLogin(values, props.history);
  };

  // const onFinishFailed = errorInfo => {
  //   console.log("Failed:", errorInfo);
  // };

  //may need to refactor left and right panels as form could be reused in modal
  return (
    <div className="login-container">
      <div className="panel left">
        <h1>Log in to your account</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="panel right">
        <h1>Don't have an account yet?</h1>
        <p>
          Local Bitcoin is the safest way to buy and sell BCH. Create an account
          and begin trading today.
        </p>
        <Link to="/signup">CREATE A NEW ACCOUNT</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingUser: state.auth.loadingUser,
    register: state.auth.registerError,
  };
};

export default connect(mapStateToProps, { doLogin })(Login);
