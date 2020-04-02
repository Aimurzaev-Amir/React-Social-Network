import React from "react";
import CommentAnswer from "./PublicationsImg/UserComment2.png";
import stl from "./Publications.module.css"

let PublicationAnswer = () => {
    return(
        <div className={stl.publicationAnswer}>
          <div className={stl.publicationAnswerPhoto}>
            <img src={CommentAnswer} alt="be able user publications comment" />
          </div>
          <div className={stl.publicationAnswerComment}>
            <p>
              <span>Diana</span>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div className={stl.publicationAllAnswers}>
              <p>Show all comments (12)</p>
            </div>
          </div>
        </div>
    )
}

export default PublicationAnswer;