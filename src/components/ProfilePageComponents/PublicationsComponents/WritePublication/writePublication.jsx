import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "./Publicbtn";
import stl from "../Publications.module.css"

let NewPostElement = React.createRef();

let addPost = () => {
  let text = NewPostElement.current.value;
  alert(text);
};


let WritePublication = (props) => {
  return(
    <div className={stl.writePublicationBg}>
      <div className={stl.writePublication}>
        <WritePublicationPhoto />
        <WritePublicationInput NewPostElement={NewPostElement}/>
        <WritePublicationAdditionals/>
        <Publicbtn addPost={addPost}/>
      </div>
    </div>
  ) 
}

export default WritePublication;
