import "./MyInfo.css"
import React, { useEffect } from "react";

function MyInfo() {
  useEffect(() => {});

  return (
    <div>
      <div className="contact__information">
        <i className="uil uil-phone contact__icon"></i>
        <div>
          <h3 className="contact__title">Call Me</h3>
          <span className="contact__subtitle">515-715-7630</span>
        </div>
      </div>

      <div className="contact__information">
        <i className="uil uil-envelope contact__icon"></i>
        <div>
          <h3 className="contact__title">Email</h3>
          <span className="contact__subtitle">skhanal7@lamar.edu</span>
        </div>
      </div>

      <div className="contact__information">
        <i className="uil uil-map-marker contact__icon"></i>
        <div>
          <h3 className="contact__title">Location</h3>
          <span className="contact__subtitle">US - Texas, Beaumont</span>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
