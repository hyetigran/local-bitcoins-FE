import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { doLogout } from "../../store/actions/authActions";

const Account = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(doLogout());
  };
  return (
    <div>
      <p>Account</p>
      <Button type="primary" onClick={() => logoutHandler()}>
        Logout
      </Button>
    </div>
  );
};

export default Account;
