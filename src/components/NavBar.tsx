import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar() {
  const [show, setShow] = useState<boolean>(false);
  const toggle = () => setShow(!show);
  return (
    <nav className="main-nav">
      <div className="main-logo">
        <Link to={"home"} className="link">
          OG.
        </Link>
      </div>
      <div className={show ? "nav-links show" : "nav-links"}>
        <div className="nav-link-item" onClick={() => toggle()}>
          <Link to={"home"} className="link">
            Home
          </Link>
        </div>
        <div className="nav-link-item" onClick={() => toggle()}>
          <Link to={"work"} className="link">
            Work
          </Link>
        </div>
        <div className="nav-link-item" onClick={() => toggle()}>
          <Link className="link" to={"about"}>
            About
          </Link>
        </div>
        <div className="nav-link-item" onClick={() => toggle()}>
          <Link className="link" to={"contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div className="mobile-nav-links">
        <i
          className="fa-solid fa-bars"
          tabIndex={-1}
          onClick={() => toggle()}
        ></i>
      </div>
    </nav>
  );
}
