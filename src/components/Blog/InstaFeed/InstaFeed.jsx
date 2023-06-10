import React from "react";
import { Link } from "react-router-dom";
import img from "~/assets/img";
import "./InstaFeed.scss";
const InstaFeed = () => {
  return (
    <>
      <aside className="single_sidebar recent_post_widget">
        <h3>Instagram Feeds</h3>
        <ul>
          <li>
            <Link>
              <img src={img.post_5} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={img.post_6} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={img.post_7} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={img.post_8} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={img.post_9} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={img.post_10} alt="" />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default InstaFeed;
