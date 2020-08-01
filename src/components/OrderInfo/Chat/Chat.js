import React from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import "./Chat.scss";

const Chat = (props) => {
  return (
    <div className="chat-container">
      <div className="chat-heading">
        <CommentOutlined />
        <div>
          <h3>Conversation</h3>
          <p>Messages are NOT end-to-end encrypted.</p>
        </div>
      </div>
      <div className="message-ctn">
        <div className="message-info">
          <p>Say hello and exchange payment details with the other use.</p>
          <p>Remember:</p>
          <ul>
            <li>Always use escrow. It's there for your safety.</li>
            <li>Open a payment dispute if you run into trouble.</li>
          </ul>
        </div>

        {/* Messages go here */}
      </div>

      <div className="message-actions">
        <Input />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Chat;
