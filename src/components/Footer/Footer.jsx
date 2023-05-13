import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "~/assets/img";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <div className="logo">
                  <Link to="/">
                    <img src={img.logofooter} alt="logo" />
                  </Link>
                </div>
                <p>
                  5th flora, 700/D kings road, green
                  <br />
                  lane New York-1782
                  <br />
                  <Link to="/">+10 367 826 2567 </Link>
                  <br />
                  <Link to="/">contact@carpenter.com</Link>
                </p>
                <div className="social-link">
                  <ul>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={faPinterest} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={faYoutube} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <div className="footer_title">Company</div>
                <div className="link">
                  <ul>
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_title">Popular Destination</div>
                <div className="link double_link">
                  <ul>
                    <li>
                      <Link to="/">Indonesia</Link>
                    </li>
                    <li>
                      <Link to="/">India</Link>
                    </li>
                    <li>
                      <Link to="/">Italy</Link>
                    </li>
                    <li>
                      <Link to="/">Franch</Link>
                    </li>
                    <li>
                      <Link to="/">America</Link>
                    </li>
                    <li>
                      <Link to="/">Switzerland</Link>
                    </li>
                    <li>
                      <Link to="/">Canada</Link>
                    </li>
                    <li>
                      <Link to="/">England</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_title">Instagram</div>
                <div className="instagram_feed">
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg1} alt="instagram" />
                    </Link>
                  </div>
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg2} alt="instagram" />
                    </Link>
                  </div>
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg3} alt="instagram" />
                    </Link>
                  </div>
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg4} alt="instagram" />
                    </Link>
                  </div>
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg5} alt="instagram" />
                    </Link>
                  </div>
                  <div className="single_insta">
                    <Link>
                      <img src={img.instaImg6} alt="instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer_border"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <p className="copy-right text-center">
                Copyright ©2023 All rights reserved | This template is made with
                by
                <Link to="/"> Colorlib</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
