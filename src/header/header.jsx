import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ toggleContact }) => {
  return (
    <header className="header">
      <div className="website-title">
        <h5>Fabric Planning Management</h5>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/Fabric-types" target="_blank" rel="noopener noreferrer">
              Fabric Types
            </a>
          </li>
          <li>
            <a href="/services" target="_blank" rel="noopener noreferrer">
              Garment Manfucturing Processes
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleContact}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
