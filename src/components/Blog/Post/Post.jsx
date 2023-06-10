import React from "react";
import { Link } from "react-router-dom";
import img from "~/assets/img";
import "./Post.scss";
const Post = () => {
  return (
    <>
      <aside className="single_sidebar recent_post_widget">
        <h3>Recent post</h3>
        <div className="media post_item">
          <img src={img.post_1} alt="" />
          <div className="media-body">
            <Link>
              <h4>From life was you fish...</h4>
            </Link>
            <p>January 12, 2019</p>
          </div>
        </div>
        <div className="media post_item">
          <img src={img.post_2} alt="" />
          <div className="media-body">
            <Link>
              <h4>The Amazing Hubble</h4>
            </Link>
            <p>02 Hours ago</p>
          </div>
        </div>
        <div className="media post_item">
          <img src={img.post_3} alt="" />
          <div className="media-body">
            <Link>
              <h4>Astronomy Or Astrology</h4>
            </Link>
            <p>03 Hours ago</p>
          </div>
        </div>
        <div className="media post_item">
          <img src={img.post_4} alt="" />
          <div className="media-body">
            <Link>
              <h4>Asteroids telescope</h4>
            </Link>
            <p>01 Hours ago</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Post;
