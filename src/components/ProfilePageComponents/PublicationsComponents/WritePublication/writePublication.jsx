import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "./Publicbtn";
import stl from "../Publications.module.css";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";

let WritePublication = (props) => {
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={stl.writePublicationBg}>
      <div className={stl.writePublication}>
        <WritePublicationPhoto />
        <WritePublicationInput
          newPostText={props.newPostText}
          onPostChange={onPostChange}
        />
        <WritePublicationAdditionals />
        <Publicbtn addPost={addPost} />
      </div>
    </div>
  );
};

export default WritePublication;
