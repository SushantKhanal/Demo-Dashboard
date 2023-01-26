import "./ContactMeForm.css";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const {
  REACT_APP_EMAIL_JS_SERVICE_ID,
  REACT_APP_EMAIL_JS_TEMPLATE_ID,
  REACT_APP_EMAIL_JS_PUBLIC_KEY,
} = process.env;

function ContactMeForm() {
  useEffect(() => {});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_EMAIL_JS_SERVICE_ID,
        REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className="contact__form grid" onSubmit={sendEmail}>
      <div className="contact__inputs grid">
        <div className="contact__content">
          <label className="contact__label">Name</label>
          <input type="text" name="from_name" className="contact__input" />
        </div>
        <div className="contact__content">
          <label className="contact__label">Email</label>
          <input type="email" name="from_email" className="contact__input" />
        </div>
      </div>
      <div className="contact__content">
        <label className="contact__label">Message</label>
        <textarea
          name="message"
          id=""
          cols="0"
          rows="7"
          className="contact__input"
        ></textarea>
      </div>

      <div>
        <button type="submit" value="Send" className="button button--flex">
          Send Message
          <i className="uil uil-message button__icon"></i>
        </button>
      </div>
    </form>
  );
}

export default ContactMeForm;
