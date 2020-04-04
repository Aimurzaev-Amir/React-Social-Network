import React from "react";
import stl from "./Messages.module.css";
import DialogItem from "./DialogItem";
import MessagesUser1 from "./UserMessages/MessagesUser1";

let Messages = () => {
  
  let Dialogs = [
    {
      id: 1,
      userName: "Alisa Keys",
      userPhoto: require("./MessagesImg/Friend1.jpg")
    },
    {
      id: 2,
      userName: "Jessica Alba",
      userPhoto: require("./MessagesImg/Friend4.jpg")
    },
    {
      id: 3,
      userName: "Ilon Mask",
      userPhoto: require("./MessagesImg/Friend4.jpg")
    },
    {
      id: 4,
      userName: "Jessica Alba",
      userPhoto: require("./MessagesImg/Friend1.jpg")
    },
    {
      id: 5,
      userName: "Alisa Keys",
      userPhoto: require("./MessagesImg/Friend4.jpg")
    },
    {
      id: 6,
      userName: "Ilon Mask",
      userPhoto: require("./MessagesImg/Friend3.jpg")
    }
  ];

  let DialogsElements = Dialogs.map(dialog => {
    return (
      <DialogItem
        id={dialog.id}
        userName={dialog.userName}
        userPhoto={dialog.userPhoto}
      />
    );
  });

  return (
    <div className="pageContentstl">
      <div className={stl.dialogsGrid}>
        <div className={stl.dialogs}>
          {DialogsElements}
        </div>
        <MessagesUser1 />
      </div>
    </div>
  );
};

export default Messages;
