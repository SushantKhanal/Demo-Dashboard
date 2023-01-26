import "./App.css";
import React, { useEffect } from "react";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";
import Services from "./Services";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Home from "./Home";
import TopBar from "./TopBar";
import Footer from "./Footer";
import ProjectInMind from "./ProjectInMind";
import Testimonials from "./Testimonials";
import ContactMe from "./ContactMe";

function App() {
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
    // /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById("header");
      if (this.scrollY >= 80) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    }

    window.addEventListener("scroll", scrollHeader);

    /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
      let scrollTop = document.getElementById("scroll-top");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
      else scrollTop.classList.remove("show-scroll");
    }

    window.addEventListener("scroll", scrollTop);
  });

  return (
    <div className="App">
      <TopBar />
      <main className="main">
        <Home />
        <AboutMe />
        <Skills />
        <Qualifications />
        <Portfolio />
        <Services />
        {/* <ProjectInMind /> */}
        <Testimonials />
        <ContactMe />
      </main>
      <Footer />

      {/* <!--========== SCROLL TOP ==========--> */}
      <button
        className="scrollup"
        id="scroll-top"
        onClick={() => {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}
      >
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </button>
      <script src="js/main.js"></script>
    </div>
  );
}

export default App;
