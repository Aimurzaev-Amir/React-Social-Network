import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = React.memo((props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  
  const ChangeStatus = () => {
    setEditMode(true);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  const SaveStatus = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };
  return (
    <div>
      {editMode && !props.userId ? (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={SaveStatus}
          type="text"
          value={status}
        />
      ) : (
        <p onClick={ChangeStatus}>
          {props.status ? props.status : "User status"}
        </p>
      )}
    </div>
  );
});

export default ProfileStatus;
