import React from "react";

let Publicbtn = (props) => {
  return (
    <button onClick={props.addPost} className="PageButton">
      Publish
    </button>
  );
};

export default Publicbtn;
