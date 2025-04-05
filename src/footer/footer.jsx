import React from "react";
import "./footer.css";
import VFlogo from "./JustBrands.jpg";
import JBlogo from "./VF.jpg";

const Footer = ({ toggleContact }) => {
  return (
    <footer className="footer">
      <p>
        &copy; © 2024 All rights reserved. The content provided is for
        informational purposes only and does not constitute legal, financial, or
        professional advice.
      </p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#" onClick={toggleContact}>
          Contact
        </a>
        <div className="brand-logos">
          <p>
            <img src={JBlogo} alt="JB" className="JBlogo" />
          </p>
          <p>
            <img src={VFlogo} alt="VF" className="VFlogo" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
