import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ContactMe from "../../ContactMe/ContactMe";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://www.linkedin.com/in/muhammedmusthafashahalv/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/musthafa__vakkayil/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/musthafa.shahal.9/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/muhammed-musthafa-s-v">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/Berlinx123">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Musthafa</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Python Programmer 😎",
                    1000,
                    "DataScience Enthusiast 🌐",
                    1000,
                    "C++ Programmer 💻",
                    1000,
                    "Traveller 🔴",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-details-tagline">
                Learning more about Python, Data Science and Machine Learning.
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <a href="Resume_Final.pdf" download="Musthafa.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
