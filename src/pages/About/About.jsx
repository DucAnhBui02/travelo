import React from "react";
import Story from "~/components/AboutStory/Story";
import RecentTrip from "~/components/RecentTrip/RecentTrip";
import SlideOnly from "~/components/Slider/SlideOnly/SlideOnly";
import Testimonial from "~/components/Testimonial/Testimonial";
import Variation from "~/components/Variation/Variation";
import Video from "~/components/Video/Video";
import img from "~/assets/img";

const About = () => {
  return (
    <>
      <SlideOnly image={img.bradcam3} title="About Us" />
      <Story />
      <Video />
      <Variation />
      <Testimonial />
      <RecentTrip />
    </>
  );
};

export default About;
