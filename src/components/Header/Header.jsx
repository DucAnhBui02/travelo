import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./header.scss";
import img from "~/assets/img";
import config from "~/config";

const Header = () => {
  return (
    <div className="header-area">
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid">
          <div className="header_bottom_border">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link to="">
                    <img src={img.logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <Link className="active" to="/">
                          home
                        </Link>
                      </li>
                      <li>
                        <Link to={config.routes.about}>About</Link>
                      </li>
                      <li>
                        <Link to={config.routes.destination}>Destination</Link>
                      </li>
                      <li>
                        <Link to="#">
                          pages <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="destination_details.html">
                              Destinations details
                            </Link>
                          </li>
                          <li>
                            <Link to="elements.html">elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">
                          blog <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">blog</Link>
                          </li>
                          <li>
                            <Link to="single-blog.html">single-blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="contact.html">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                <div className="social_wrap d-flex align-items-center justify-content-end">
                  <div className="number">
                    <p>
                      <FontAwesomeIcon icon={faPhone} />
                      10(256)-928 256
                    </p>
                  </div>
                  <div className="social_links d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon icon={faGooglePlusG} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_icon">
                <Link
                  className="link"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  to="#"
                >
                  <FontAwesomeIcon className="icon" icon={faSearch} />
                </Link>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
