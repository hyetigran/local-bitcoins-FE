import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

import { doLogin } from "../../store/actions/authActions";
import "./Login.scss";

//layout form
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const Login = props => {
  const [loginForm, setLoginForm] = useState();

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = e => {
    if (loginForm.username && loginForm.email && loginForm.password) {
      setLoginForm({ ...loginForm, error: "" });
    } else {
      setLoginForm({ error: "Please fill in all fields" });
    }
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    console.log(loginForm);
  };

  const loginSubmit = e => {
    e.preventDefault();
    if (loginForm.username && loginForm.email && loginForm.password) {
      const credentials = {
        username: loginForm.username,
        email: loginForm.email,
        password: loginForm.password
      };
      console.log(credentials);
      props.doLogin(credentials, props.history);
    } else {
      setLoginForm({ error: "Please fill in all fields" });
    }
  };

  return (
    <div className="login-container">
      <div className="panel left">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
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
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="panel right">signup</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loadingUser: state.auth.loadingUser,
    register: state.auth.registerError
  };
};

export default connect(mapStateToProps, { doLogin })(Login);
