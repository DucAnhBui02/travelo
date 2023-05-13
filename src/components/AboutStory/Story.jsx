import React from "react";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

import img from "~/assets/img";
import "./Story.scss";

const Story = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <div className="about_story">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_title">
                <h3>Our Story</h3>
              </div>
              <div className="row">
                <div className="col-lg-11 offset-lg-1">
                  <div className="story_info">
                    <div className="row">
                      <div className="col-lg-9">
                        <p>
                          Consulting represents success at realizing the company
                          is going in the wrong direction. The only time the
                          company fails is when it is not possible to do a
                          turnaround anymore. We help companies pivot into more
                          profitable directions where they can expand and grow.
                          It is inevitable that companies will end up making a
                          few mistakes; we help them correct these mistakes.
                        </p>
                        <p>
                          Consulting represents success at realizing the company
                          is going in the wrong direction. The only time the
                          company fails is when it is not possible to do a
                          turnaround anymore. We help companies pivot into more
                          profitable directions where they can expand and grow.
                          It is inevitable that companies will end up making a
                          few mistakes; we help them correct these mistakes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="story_thumb">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="thumb padd">
                          <img src={img.about1} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="thumb">
                          <img src={img.about2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="counter">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="single_counter text-center">
                          <ScrollTrigger onEnter={() => setCount(true)}>
                            <h3>
                              {count && (
                                <CountUp
                                  start={0}
                                  end={378}
                                  duration={5}
                                  delay={0}
                                />
                              )}
                            </h3>
                          </ScrollTrigger>
                          <p>Tour has done successfully</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single_counter text-center">
                          <ScrollTrigger onEnter={() => setCount(true)}>
                            <h3>
                              {count && (
                                <CountUp
                                  start={0}
                                  end={30}
                                  duration={5}
                                  delay={0}
                                />
                              )}
                            </h3>
                          </ScrollTrigger>
                          <p>Yearly tour arrange</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single_counter text-center">
                          <ScrollTrigger onEnter={() => setCount(true)}>
                            <h3>
                              {count && (
                                <CountUp
                                  start={0}
                                  end={2263}
                                  duration={5}
                                  delay={0}
                                />
                              )}
                            </h3>
                          </ScrollTrigger>
                          <p>Happy Clients</p>
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

export default Story;
