import "./Services.css";
import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    /*==================== SERVICES MODAL ====================*/
    const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

    let modal = function (modalClick) {
      modalViews[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });
  });

  return (
    <div>
      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle"></span>

        <div className="services__container container grid">
          {/* <!--=============== SERVICES 1 ===============--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Mobile app <br />
                Developer
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Mobile app <br />
                  Developer
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I am adept with React Native.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I build hybrid(android/ios) apps.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I build responive applications.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I am a team player.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!--=============== SERVICES 2 ===============--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Frontend <br />
                Developer
              </h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Frontend Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I can perfect the designs you have.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create responsive designs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I am good with HTML/CSS, React, Angular.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!--=============== SERVICES 3 ===============--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-pen services__icon"></i>
              <h3 className="services__title">
                Backend <br />
                Developer
              </h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Backend Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I have worked on ERP application with Java Spring.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I can work with Node JS.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I am an expert in Firebase.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I am also your Pythonista.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
