import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import {
  CoffeeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import "./Footer.scss";

const { Footer } = Layout;
const FooterComponent = () => {
  return (
    <Footer>
      <div className="footer">
        <div className="footer-info">
          <p>
            This is a clone of{" "}
            <a
              href="https://local.bitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitcoin.com Local
            </a>
          </p>
          <div className="contact-links">
            <a
              href="https://www.github.com/hyetigran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/tigranasriyan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined />
            </a>
            <a
              href="https://www.atigran.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FolderOpenOutlined />
            </a>
          </div>
          <p>
            Made with the help of <CoffeeOutlined /> by Tigran
          </p>
        </div>
        <div className="action-links">
          <p>Trade</p>
          <Link to="/offers/trade">Buy BCH</Link>
          <Link to="/offers/trade">Sell BCH</Link>
          <Link to="/my-offers">My offers</Link>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
