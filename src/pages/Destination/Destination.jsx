import React from "react";
import img from "~/assets/img";
import FormRegister from "~/components/FormRegister/FormRegister";
import Newletter from "~/components/Newletter/Newletter";
import RecentTrip from "~/components/RecentTrip/RecentTrip";
import Search from "~/components/SearchTravel/Search";
import SlideOnly from "~/components/Slider/SlideOnly/SlideOnly";

const Destination = () => {
  return (
    <>
      <SlideOnly image={img.bradcam2} title="Destinations" />
      <FormRegister />
      <Search />
      <Newletter />
      <RecentTrip />
    </>
  );
};

export default Destination;
