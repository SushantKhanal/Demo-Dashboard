import "./PortfolioSlide.css";
import React from "react";

function PortfolioSlide({ item, openModal }) {
  return (
    <React.Fragment>
      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          <div className="portfolio__content grid swiper-slide">
            <img src={item.imageUrl} alt="" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">{item.title}</h3>
              <p className="portfolio__description">{item.desc}</p>
              <button
                data-portfolio-modal-target="#portfolio__modal"
                className="button button--flex button--small portfolio__button"
                onClick={() => {
                  openModal(item.id);
                }}
              >
                Demo
                <i className="uil uil-arrow-right button__icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioSlide;
