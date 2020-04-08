import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "./Publicbtn";
import stl from "../Publications.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";

let WritePublication = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
 
  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={stl.writePublicationBg}>
      <div className={stl.writePublication}>
        <WritePublicationPhoto />
        <WritePublicationInput
          newPostText={props.newPostText}
          onPostChange={onPostChange}
          updateNewPostText={props.updateNewPostText}
        />
        <WritePublicationAdditionals />
        <Publicbtn addPost={addPost} />
      </div>
    </div>
  );
};

export default WritePublication;
