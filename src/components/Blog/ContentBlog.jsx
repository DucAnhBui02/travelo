import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "~/assets/img";
import "./ContentBlog.scss";
import {
  faComments,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ContentBlog = () => {
  const datas = [
    {
      image: img.blog1,
    },
    {
      image: img.blog2,
    },
    {
      image: img.blog3,
    },
    {
      image: img.blog4,
    },
    {
      image: img.blog5,
    },
  ];
  return (
    <section>
      <div className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left">
                {datas.map((data, i) => (
                  <article className="blog_item" key={i}>
                    <div className="blog_img">
                      <img className="rounded-0" src={data.image} alt="" />
                      <Link>
                        <h3>15</h3>
                        <p>Jan</p>
                      </Link>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block">
                        <h2>Google links pact for new 35-storey office</h2>
                      </Link>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="info_details">
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faUser} /> Travel, Lifestyle
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faComments} /> 03 Comments
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right">
                <aside className="single_sidebar">
                  <form>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" placeholder="Search Keyword " />
                        <div className="input-group-append">
                          <button>
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>
                      <button
                        className="btn rounded-0 primary-bg text-white w-100"
                        style={{ background: "#1EC6B6" }}
                      >
                        Seach
                      </button>
                    </div>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlog;
