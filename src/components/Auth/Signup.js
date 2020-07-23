import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";

import { doRegister } from "../../store/actions/authActions";
import "./Signup.scss";

const Signup = (props) => {
  const onFinish = (values) => {
    props.doRegister(values, props.history);
  };

  // const onFinishFailed = errorInfo => {
  //   console.log("Failed:", errorInfo);
  // };

  //may need to refactor left and right panels as form could be reused in modal
  return (
    <div className="signup-container">
      <h1>Create an account</h1>
      <Form
        name="register"
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
          <Input />
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
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            CREATE ACCOUNT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingUser: state.auth.loadingUser,
    register: state.auth.registerError,
  };
};

export default connect(mapStateToProps, { doRegister })(Signup);
