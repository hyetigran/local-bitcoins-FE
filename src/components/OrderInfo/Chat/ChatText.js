import React from "react";

import moment from "moment";

import "./ChatText.scss";

const ChatText = ({ message, userId }) => {
  const { created_at, text, author_id } = message;

  return (
    <div className={"chat-text" + (+userId === author_id ? " self" : "")}>
      <p>{text}</p>
      <p className="time">{moment(created_at).format("h:mm a")}</p>
    </div>
  );
};

export default ChatText;
