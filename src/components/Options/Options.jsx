import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./Options.scss";
import img from "~/assets/img";
const Options = (props) => {
  const datalist = [
    {
      img: img.place1,
      title: "Miami Beach",
      description: "United State of America",
    },
    {
      img: img.place2,
      title: "Miami Beach",
      description: "United State of America",
    },
    {
      img: img.place3,
      title: "Miami Beach",
      description: "United State of America",
    },
    {
      img: img.place4,
      title: "Miami Beach",
      description: "United State of America",
    },
    {
      img: img.place5,
      title: "Miami Beach",
      description: "United State of America",
    },
    {
      img: img.place6,
      title: "Miami Beach",
      description: "United State of America",
    },
  ];
  return (
    <>
      {datalist.map((data) => (
        <div className={props.className} key={data.img}>
          <div className="single_place">
            <div className="thumb">
              <img src={data.img} alt="" />
              <Link className="price">$500</Link>
            </div>
            <div className="place_info">
              <Link to="/">
                <h3>{data.title}</h3>
              </Link>
              <p>{data.description}</p>
              <div className="rating_days d-flex justify-content-between align-items-center">
                <span className="icon_star">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <Link>(20 Review)</Link>
                </span>
                <div className="days">
                  <FontAwesomeIcon icon={faClock} />
                  <Link>5 Days</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Options;
