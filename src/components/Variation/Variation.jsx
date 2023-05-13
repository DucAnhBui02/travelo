import React from "react";
import "./Variation.scss";
import img from "~/assets/img";

const Variation = () => {
  return (
    <>
      <div className="variation_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_travel text-center">
                <div className="icon">
                  <img src={img.variation1.default} alt="" />
                </div>
                <h3>Comfortable Journey</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_travel text-center">
                <div className="icon">
                  <img src={img.variation2.default} alt="" />
                </div>
                <h3>Luxuries Hotel</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_travel text-center">
                <div className="icon">
                  <img src={img.variation3.default} alt="" />
                </div>
                <h3>Travel Guide</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variation;
