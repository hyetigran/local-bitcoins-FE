import React, { useEffect } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { createMessage } from "../../../store/actions/chatActions";
import "./Chat.scss";

const Chat = (props) => {
  const chatMessages = useSelector((state) => state.chat.messages);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onFinish = (value) => {
    console.log(value);
    //dispatch(createMessage(value));
    form.resetFields();
  };
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
        <Form name="normal_message" onFinish={onFinish} form={form}>
          <Form.Item name="message">
            <Input placeholder="Write a message" autoFocus />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
