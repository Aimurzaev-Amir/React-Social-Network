import React from "react";
import UserAnswerIcon from "./PublicationsImg/user-photo.png";
import stl from "./Publications.module.css"

let UserCommentAnswer = () => {
    return(
        <div className={stl.userAnswer}>
          <img src={UserAnswerIcon} alt="" />
          <input type="text" placeholder="Post a comment" />
        </div>
    )
}

export default UserCommentAnswer;