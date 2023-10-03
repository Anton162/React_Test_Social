import React from "react";
import style_dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogMessage/Message";

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
