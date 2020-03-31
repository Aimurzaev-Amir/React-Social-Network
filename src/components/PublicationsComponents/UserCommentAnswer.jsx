import React from "react";
import UserAnswerIcon from "../../img/Publications/user-photo.png";

let UserCommentAnswer = () => {
    return(
        <div className="userAnswer">
          <img src={UserAnswerIcon} alt="" />
          <input type="text" placeholder="Post a comment" />
        </div>
    )
}

export default UserCommentAnswer;