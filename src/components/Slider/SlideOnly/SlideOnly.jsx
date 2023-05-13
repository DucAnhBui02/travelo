import React from "react";
import "./SlideOnly.scss";

const SlideOnly = ({ image, title = "" }) => {
  return (
    <>
      <div
        className="slide_only_area"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>{title}</h3>
                <p>Pixel Perfect Design With Awesome Contents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideOnly;
