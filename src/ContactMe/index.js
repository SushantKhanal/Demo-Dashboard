import "./ContactMe.css";
import React, { useEffect } from "react";
import MyInfo from "./MyInfo";
import ContactMeForm from "./ContactMeForm";

function ContactMe() {
  useEffect(() => {});

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <MyInfo />
        <ContactMeForm />
      </div>
    </section>
  );
}

export default ContactMe;
