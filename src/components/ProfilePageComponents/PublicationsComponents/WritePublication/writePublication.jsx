import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "./Publicbtn";
import stl from "../Publications.module.css";

let WritePublication = (props) => {

  let NewPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };
 
  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  };

  return (
    <div className={stl.writePublicationBg}>
      <div className={stl.writePublication}>
        <WritePublicationPhoto />
        <WritePublicationInput
        newPostText={props.newPostText}
          onPostChange={onPostChange}
          updateNewPostText={props.updateNewPostText}
          NewPostElement={NewPostElement}
        />
        <WritePublicationAdditionals />
        <Publicbtn addPost={addPost} />
      </div>
    </div>
  );
};

export default WritePublication;
