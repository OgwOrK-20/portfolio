import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [hover, setHover] = useState(false);
  return (
    <div>
      {" "}
      <footer>
        <div className="footer-wrapper">
          <Link to="/" className="footer-logo">
            OG.
          </Link>
          <div className="footer-links">
            <Link to={"/"} className="footer-link-item">
              Home
            </Link>
            <Link to={"work"} className="footer-link-item">
              Work
            </Link>
            <Link to={"about"} className="footer-link-item">
              About
            </Link>
            <Link to={"contact"} className="footer-link-item">
              Contact
            </Link>
          </div>
          <div className="social-media-links">
            <div className="social-media-item">
              <a
                href="https://www.linkedin.com/in/olivergee-/"
                className="outside-link"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <i className={"fa-brands fa-linkedin-in"}></i>
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://github.com/OgwOrK-20"
                className="outside-link"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://www.instagram.com/olivergee2021/"
                className="outside-link"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://www.facebook.com/profile.php?id=100071502531629"
                className="outside-link"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copy-right">© 2021 Oliver Gee</div>
      </footer>
    </div>
  );
}
