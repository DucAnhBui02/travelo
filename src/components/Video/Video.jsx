import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import "./Video.scss";
import img from "~/assets/img";

const Video = () => {
  return (
    <>
      <div
        className="video_area"
        style={{ backgroundImage: `url(${img.video})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video_wrap text-center">
                <h3>Enjoy Video</h3>
                <div className="video_icon">
                  <Link className="popup-video video_play_btn">
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
