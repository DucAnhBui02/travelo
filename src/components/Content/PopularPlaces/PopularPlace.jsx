import { React } from "react";
import { Link } from "react-router-dom";
import "./PopularPlace.scss";

import Options from "~/components/Options/Options";

const PopularPlace = () => {
  return (
    <>
      <div className="popular_places_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb70">
                <h3>Popular Places</h3>
                <p>
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Options className="col-lg-4 col-md-6" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="more-places text-center">
                <Link>More Places</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPlace;
