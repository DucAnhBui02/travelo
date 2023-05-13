import React from "react";
import Slider from "~/components/Slider/Slider";
import FormRegister from "~/components/FormRegister/FormRegister";
import PopularDestination from "~/components/Content/PopularDestinations/PopularDestination";
import Newletter from "~/components/Newletter/Newletter";
import PopularPlace from "~/components/Content/PopularPlaces/PopularPlace";
import Video from "~/components/Video/Video";
import Variation from "~/components/Variation/Variation";
import Testimonial from "~/components/Testimonial/Testimonial";
import RecentTrip from "~/components/RecentTrip/RecentTrip";

const Home = () => {
  return (
    <>
      <Slider />
      <FormRegister />
      <PopularDestination />
      <Newletter />
      <PopularPlace />
      <Video />
      <Variation />
      <Testimonial />
      <RecentTrip />
    </>
  );
};

export default Home;
