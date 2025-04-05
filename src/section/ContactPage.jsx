import React from "react";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
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
          {/* <img src="/your-image.jpg" alt="Your Profile" className="contact-image" /> */}
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
