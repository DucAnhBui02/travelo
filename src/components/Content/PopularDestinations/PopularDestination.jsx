import React from "react";
import { Link } from "react-router-dom";
import "./PopularDestination.scss";
import img from "~/assets/img";

const Popular = () => {
  const datas = [
    {
      thumb: img.destination1,
      country: "Paris",
      count: 7,
    },
    {
      thumb: img.destination2,
      country: "Brazil",
      count: 3,
    },
    {
      thumb: img.destination3,
      country: "America",
      count: 10,
    },
    {
      thumb: img.destination4,
      country: "Nepal",
      count: 2,
    },
    {
      thumb: img.destination5,
      country: "Maldives",
      count: 2,
    },
    {
      thumb: img.destination6,
      country: "Indonesia",
      count: 4,
    },
  ];
  return (
    <>
      <div className="popular_destination_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center">
                <h3>Popular Destination</h3>
                <p>
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {datas.map((data, index) => (
              <div className="col-lg-4" key={index}>
                <div className="single_destination">
                  <div className="thumb">
                    <img src={data.thumb} alt="" />
                  </div>
                  <div className="content">
                    <p className="d-flex align-items-center">
                      {data.country}
                      <Link>{data.count} Places</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
