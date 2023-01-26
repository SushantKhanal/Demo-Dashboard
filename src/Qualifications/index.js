import "./Qualifications.css";
import React, { useEffect } from "react";

function Qualifications() {
  useEffect(() => {
    /*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll(".qualification__button"),
      tabContents = document.querySelectorAll(".qualification__content");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });
  });

  return (
    <div>
      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle"></span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
            <div
              className="qualification__button button--flex"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="work"
            >
              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Founder</h3>
                  <span className="qualification__subtitle">
                    Iemaan Technology
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016-2017
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className="qualification__data">
                <div></div>

                <div className="qualification__time">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Full Stack Software Developer
                  </h3>
                  <span className="qualification__subtitle">
                    F1Soft International
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018-2019
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Front-end/Mobile-app Developer
                  </h3>
                  <span className="qualification__subtitle">Able Labs</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019-2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION CONTENT 2 ===============--> */}
            <div className="qualification__content" data-content id="education">
              {/* <!--=============== QUALIFICATION 3 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Font-End Nano degree</h3>
                  <span className="qualification__subtitle">Udacity</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    MS in Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    Lamar University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2023
                  </div>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">BE in Civil Engineer</h3>
                  <span className="qualification__subtitle">
                    Tribhuvan University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2011 - 2016
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualifications;
