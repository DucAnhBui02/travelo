import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import img from "~/assets/img";
import "./slider.scss";

const Slider = () => {
  const data = [
    {
      id: 1,
      title: "Indonesia",
      bg: img.banner1,
      description: "Pixel perfect design with awesome contents",
    },
    {
      id: 2,
      title: "Australia",
      bg: img.banner2,
      description: "Pixel perfect design with awesome contents",
    },
    {
      id: 3,
      title: "Switzerland",
      bg: img.banner3,
      description: "Pixel perfect design with awesome contents",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevIndex = () => {
    const isFirstSlide = index === 0;
    const newSlide = isFirstSlide ? data.length - 1 : index - 1;
    setIndex(newSlide);
  };

  const nextIndex = () => {
    const isLastSlide = index === data.length - 1;
    const newSlide = isLastSlide ? 0 : index + 1;
    setIndex(newSlide);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [data.length, index]);

  return (
    <div className="slider-area">
      <div className="slideshow-container">
        <div
          className="single-slider d-flex align-items-center overlay"
          style={{ backgroundImage: `url(${data[index].bg})` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-md-12">
                <div className="text-center">
                  <h3>{data[index].title}</h3>
                  <p>{data[index].description}</p>
                  <Link to="/">Explore Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => prevIndex(index)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="owl-next" onClick={() => nextIndex(index)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
