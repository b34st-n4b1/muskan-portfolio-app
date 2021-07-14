import React, { useState } from "react";
import "./Contact.css";
const ContactMe = ({
  contactEmail,
  phone,
  city,
  state,
  contactName,
  contactMessage,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (name === "" && email === "" && message === "") {
      alert(`Please provide mandatory details`);
    } else {
      window.open(
        `mailto:${contactEmail}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
          email
        )}): ${encodeURIComponent(message)}`
      );
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-title">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>

      <div className="row section-head">
        <div className="two columns header-col"></div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  size="35"
                  id="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                  required
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              <br />
              {city}, {state}
              <br />
              {phone}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactMe;
