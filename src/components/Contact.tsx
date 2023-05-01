import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <React.Fragment>
      <form className="contact-form" method="post">
        <div className="contact-wrapper">
          <h1>feel free to reach out!</h1>
          <h3>
            or click{" "}
            <a className="link" href="mailto:j16016415@icloud.com">
              here
            </a>
            ~
          </h3>
          <div className="contact-item">
            <label>First name</label>
            <input type="text" name="firstName" id="firstName" required />
            <label>Last name</label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
          <div className="contact-item">
            <label>Email address </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="contact-item">
            <label>Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="contact-item">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </React.Fragment>
  );
}
