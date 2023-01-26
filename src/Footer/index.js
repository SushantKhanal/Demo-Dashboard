import "./Footer.css";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {});

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Sushant</h1>
            <span className="footer__subtitle">Software developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/sushant.khanal.73113"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/lanahktnahsus/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/wheelsandrhymes"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
