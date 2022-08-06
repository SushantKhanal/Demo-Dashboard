import React from "react";
import "./productScore.scss";

const ProductScore = () => {
  return (
    <div className="product-score-card">
      <div className="title text-center">
        <span className="founder">Profit</span>
        <span className="score">Score</span>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="profit-score">293</h4>
        </div>
      </div>
      <div className="product-score">
        <div className="col-12 main-col" style={{}}>
          <span className="rate-min">0</span>
          <div className="rate-cont">
            <div className="rate-ind ind1">
              <div>
                <span></span>
              </div>
            </div>
            <div className="rate-ind ind2 active">
              <div>
                <span style={{ width: "40px" }}></span>
              </div>
            </div>
            <div className="rate-ind ind3">
              <div>
                <span></span>
              </div>
            </div>
            <div className="rate-ind ind4">
              <div>
                <span></span>
              </div>
            </div>
            <div className="rate-ind ind5">
              <div>
                <span></span>
              </div>
            </div>

            <div className="rate-ind ind6">
              <div>
                <span></span>
              </div>
            </div>

            <div className="rate-ind ind7">
              <div>
                <span></span>
              </div>
            </div>

            <div className="rate-ind ind8">
              <div>
                <span></span>
              </div>
            </div>

            <div className="rate-ind ind9">
              <div>
                <span></span>
              </div>
            </div>
          </div>
          <span className="rate-max">2000</span>
        </div>
      </div>
    </div>
  );
};

export default ProductScore;
