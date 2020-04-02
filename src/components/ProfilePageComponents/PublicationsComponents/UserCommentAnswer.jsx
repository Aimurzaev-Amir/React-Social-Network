import React from "react";
import UserAnswerIcon from "./PublicationsImg/user-photo.png";

let UserCommentAnswer = () => {
    return(
        <div className="userAnswer">
          <img src={UserAnswerIcon} alt="" />
          <input type="text" placeholder="Post a comment" />
        </div>
    )
}

export default UserCommentAnswer;