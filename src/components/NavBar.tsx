import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <div className="main-logo">
        <Link to={"home"} className="link">
          OG.
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-link-item">
          <Link to={"home"} className="link">
            Home
          </Link>
        </div>
        <div className="nav-link-item">
          <Link to={"work"} className="link">
            Work
          </Link>
        </div>
        <div className="nav-link-item">
          <Link className="link" to={"about"}>
            About
          </Link>
        </div>
        <div className="nav-link-item">
          <Link className="link" to={"contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div className="mobile-nav-links">
        <i className="fa-solid fa-bars" tabIndex={-1}></i>
      </div>
    </nav>
  );
}
