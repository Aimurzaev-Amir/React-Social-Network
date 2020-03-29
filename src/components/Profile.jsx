import React from "react";

let Profile = () => {
    return (
        <div className="content">
        <div className="content-banner">
          <img src="https://babeltechreviews.com/wp-content/uploads/2018/07/rendition1.img_.jpg" />
        </div>
        <div className="about-user">
          <div className="user-photo">
            <img src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" />
          </div>
          <div className="user-info">
            <h3>Aimurzayev A.</h3>
            <ul>
              <li>Date of Birth: 15 August</li>
              <li>City: Almaty</li>
              <li>Education: DKU'18</li>
              <li>Web Site: aimurzayev.com</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Profile;