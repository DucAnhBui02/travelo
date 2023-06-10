import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "~/assets/img";
import "./ContentBlog.scss";
import {
  faComments,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Category from "./Category/Category";
import Post from "./Post/Post";
import InstaFeed from "./InstaFeed/InstaFeed";
import Form from "./Form/Form";

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
                <Form placeholderText="Search Keyword" btnText="SEARCH">
                  <div className="input-group-append">
                    <button className="btn">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </Form>
                <Category />
                <Post />
                <InstaFeed />
                <Form placeholderText="Enter email" btnText="SUBSCRIBE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlog;
