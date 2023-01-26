import "./PortfolioModal.css";
import React from "react";

function PortfolioModal({ modalData }) {
  return (
    <React.Fragment>
      <div className="portfolio__modal active" id="portfolio__modal">
        <div className="portfolio__modal__header">
          <div className="title">{modalData.title}</div>
          <div className="portfolio-modal-close-button close__modal">
            &times;
          </div>
        </div>

        <div className="portfolio__modal__body">
          {modalData.data.map((dataItem) => (
            <React.Fragment key={dataItem.imageDesc}>
              <div className="portfolio__modal__section">
                <img
                  src={dataItem.imageUrl}
                  alt=""
                  className="portfolio__erp__dashboard"
                  style={dataItem.imageWidth && { width: dataItem.imageWidth }}
                />
              </div>
              <div className="portfolio__image__title">
                {dataItem.imageDesc}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div id="portfolio__overlay" className="active"></div>
    </React.Fragment>
  );
}

export default PortfolioModal;
