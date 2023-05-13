import React from "react";
import img from "~/assets/img";
import "./Newletter.scss";

const Newletter = () => {
  return (
    <>
      <div
        className="newletter"
        style={{ backgroundImage: `url('${img.newletter}')` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="newletter_text">
                    <h4>Subscribe Our Newsletter</h4>
                    <p>
                      Subscribe newsletter to get offers and about new places to
                      discover.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mail_form">
                    <div className="row g-0">
                      <div className="col-lg-9 col-md-8">
                        <div className="newsletter_field">
                          <input type="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                        <div className="newsletter_btn">
                          <button className="box_btn">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newletter;
