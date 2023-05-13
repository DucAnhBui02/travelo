import React from "react";
import { useState } from "react";
import "./Testimonial.scss";
import img from "~/assets/img";

const Testimonial = () => {
  const names = ["Micky", "Tom", "Jerry"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlides = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="carousel-inner">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-8">
                    <div className="carousel-item active">
                      <img src={img.author} alt="First slide" />
                      <div className="single_testmonial carousel-caption d-none d-md-block">
                        <p>
                          "Working in conjunction with humanitarian aid
                          agencies, we have supported programmes to help
                          alleviate human suffering.
                        </p>
                        <h5>- {names[currentIndex]} Mouse</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slideshowDots">
                  {names.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${
                        currentIndex === idx ? " active" : ""
                      }`}
                      onClick={() => goToSlides(idx)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
