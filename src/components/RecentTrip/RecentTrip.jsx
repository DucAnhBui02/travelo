import React from "react";
import { Link } from "react-router-dom";
import img from "~/assets/img";
import "./RecentTrip.scss";

const RecentTrip = () => {
  return (
    <>
      <div className="recent_trip">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>Recent Trips</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="thumb">
                <img src={img.trip1} alt="" />
              </div>
              <div className="info">
                <div className="date">
                  <span>Oct 12, 2019</span>
                </div>
                <Link>Journeys Are Best Measured In New Friends</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="thumb">
                <img src={img.trip2} alt="" />
              </div>
              <div className="info">
                <div className="date">
                  <span>Oct 12, 2019</span>
                </div>
                <Link>Journeys Are Best Measured In New Friends</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="thumb">
                <img src={img.trip3} alt="" />
              </div>
              <div className="info">
                <div className="date">
                  <span>Oct 12, 2019</span>
                </div>
                <Link>Journeys Are Best Measured In New Friends</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTrip;
