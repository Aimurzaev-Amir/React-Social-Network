import React from "react";
import CommentAnswer from "../../img/Publications/UserComment2.png";

let PublicationAnswer = () => {
    return(
        <div className="publicationAnswer">
          <div className="publicationAnswerPhoto">
            <img src={CommentAnswer} alt="be able user publications comment" />
          </div>
          <div className="publicationAnswerComment">
            <p>
              <span>Diana</span>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div className="publicationAllAnswers">
              <p>Show all comments (12)</p>
            </div>
          </div>
        </div>
    )
}

export default PublicationAnswer;