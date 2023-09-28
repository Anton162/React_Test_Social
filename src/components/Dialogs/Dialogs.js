import React from "react";
import style_dialogs from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style_dialogs.dialog + " " + style_dialogs.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style_dialogs.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style_dialogs.dialogs}>
      <div className={style_dialogs.dialogsItem}>
        <DialogItem name="Bob" id="1" />
        <DialogItem name="Sara" id="2" />
        <DialogItem name="Kate" id="3" />
        <DialogItem name="Piter" id="4" />
        <DialogItem name="Stive" id="5" />
        <DialogItem name="Barbara" id="6" />
      </div>
      <div className={style_dialogs.messages}>
        <Message message="Hello, how are you?" />
        <Message message="Were are you?" />
        <Message message="on Friday" />
      </div>
    </div>
  );
};

export default Dialogs;
