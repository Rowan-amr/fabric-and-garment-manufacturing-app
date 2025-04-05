import React from "react";
import profile from "./profile.jpg";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <img src={profile} alt="Rowan" className="contact-image" />
      <p>
        <b>Name:</b> Rowan Amr Othman
      </p>
      <p>
        <b>Phone:</b> +201020926216
      </p>
      <p>
        <b>Email:</b> Rowanamr.34@gmail.com
      </p>
      <p>
        <b>LinkedIn: </b>
        <a
          href="https://www.linkedin.com/in/rowan-amr-01a350198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          \Rowan-Amr
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
