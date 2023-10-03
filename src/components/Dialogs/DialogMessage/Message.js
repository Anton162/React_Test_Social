import React from "react";
import style_dialogs from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={style_dialogs.message}>{props.message}</div>;
};

export default Message;
