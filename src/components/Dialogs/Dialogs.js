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
  let dialogsData = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Kate" },
    { id: 4, name: "Piter" },
    { id: 5, name: "Stive" },
    { id: 6, name: "Barbara" },
  ];

  let messagesData = [
    { id: 1, message: "Hello, how are you?" },
    { id: 2, message: "Were are you?" },
    { id: 3, message: "on Friday" },
    { id: 4, message: "Hello" },
    { id: 5, message: "I am fine, and u?" },
    { id: 6, message: "Were are u?" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={style_dialogs.dialogs}>
      <div className={style_dialogs.dialogsItem}>{dialogsElements}</div>
      <div className={style_dialogs.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
