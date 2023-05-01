import React from "react";
import "../css/home.css";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <div className="header-img">
          <img src="/img/header-img.jpeg" alt="header-image" />
        </div>
        <div className="intro">
          <h1 className="home-title">Oliver Gee</h1>
          <h2 className="home-intro"> a web developer</h2>
        </div>
      </header>
      <main>
        <div className="profile">
          <h1>Eating. Drinking. Coding. & Always learning</h1>
          <a href="/about" className="link">
            Learn more
          </a>
        </div>
        <div className="project">
          <h3>my recent projects</h3>
          <div className="project-list">
            <div className="project-item">
              <a href="/work">
                <img src="/img/church.jpeg" alt="" />
              </a>
            </div>
            <div className="project-item">
              <a href="/work">
                <img src="/img/beijing.jpeg" alt="" />
              </a>
            </div>
            <div className="project-item">
              <a href="/work">
                <img src="/img/yoga.jpeg" alt="" />
              </a>
            </div>
          </div>
          <a href="/about" className="link">
            View all my work
          </a>
        </div>
        <div className="welcome">
          <h1>open for employment</h1>
          <a href="/contact" className="link">
            <h3>get in touch</h3>
          </a>
        </div>
      </main>
    </React.Fragment>
  );
}
