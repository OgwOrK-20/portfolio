import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <React.Fragment>
      <header>
        <div className="header-img">
          <img src="/img/header-img.png" alt="header-image" />
        </div>
        <div className="intro">
          <h1 className="about-title">hi, this is Oliver!</h1>
          <h2 className="about-intro">
            I'm a full-stack web developer who's passionate about building
            digital experiences that nurture community, knowledge and young
            generation. I am currently a graduate student in Computer
            Engineering at Memorial University of Newfoundland and I have a BE
            in Electrical Engineering from the Southeast University.
          </h2>
          <h2 className="about-intro">
            Whether the internet or the outdoors, I love exploring, and I apply
            this open mindset to my creative projects. I am happiest when I am
            using my passions to help you pursue yours! If you're interested in
            working together,
            <Link to={"contact"} className="link">
              get in touch here!
            </Link>
            {/* <a href="/contact" className="link">
              get in touch here!
            </a> */}
          </h2>
        </div>
      </header>
      <main>
        <div className="education">
          <div className="edu-wrapper">
            <div className="edu-img seu-img">
              <img src="/img/seu.png" alt="" />
            </div>
            <div className="uni-container">
              <h1 className="edu-degree">Bachelor in Electrical Engineering</h1>
              <h2 className="seu-info">Southeast University ——— China</h2>
              <h3>2016 ——— 2021</h3>
            </div>
          </div>
          <div className="edu-wrapper">
            <div className="uni-container">
              <h1 className="edu-degree">Master in Computer Engineering</h1>
              <h2 className="edu-time">
                Memorial University of Newfoundland —— Canada
              </h2>
              <h3>2021 ——— present</h3>
            </div>
            <div className="edu-img mun-img">
              <img src="/img/mun.png" alt="" />
            </div>
          </div>
        </div>
        <div className="skills-wrapper">
          <h1>my skills.</h1>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>UI/UX design</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>Typescript</li>
            <li>Node.Js</li>
            <li>React</li>
            <li>Material UI</li>
            <li>Restful API</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Git collaboration</li>
            <li>AWS</li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
}
