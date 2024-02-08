import React from "react";
import SideDash from "./sidedash/sidedash";
import Form from "./form/form";
import "./master.css";

const Main = () => {
  return (
    <div className="row">
      <div className="col-3 pb-0">
        <SideDash />
      </div>
      <div className="col-9 viewBox p-3">
        <div className="banner">
          <img src="bagicon.svg" style={{ height: "100px" }} />
          <div className="text">
            <h2>Premium Account</h2>
            <p>
              You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited
              number of resumes and cover letters in both PDF and Word formats.
            </p>
          </div>
        </div>
        <Form />

        <div className="msgBox">
          <div className="text">
            <h2>Delete account</h2>
            <p>If you delete your account you’ll be permanently removing it from our systems - you can't undo it.</p>
            <a href="#" style={{ color: "#ff8282" }}>
              Yes, Delete my account
            </a>
          </div>
        </div>

        <p>
          <a href="#"> Get in touch with our support team </a> if you have any question or want to leave some feedback. We’ll be happy to hear from you.
        </p>

        <footer>
          <ul>
            <li>
              <a href="#"> Terms & Condition </a>
            </li>
            <li>
              <a href="#">Privacy Policy </a>
            </li>
            <li>
              <a href="#">FAQ </a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Main;
