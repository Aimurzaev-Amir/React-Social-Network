import React from "react";
import stl from "./Publications.module.css"

let PublisherCommentText = (props) => {
    return(
        <div className={stl.publishedText}>
          <p>
            { props.publicationText }
          </p>
        </div>
    )
}

export default PublisherCommentText;