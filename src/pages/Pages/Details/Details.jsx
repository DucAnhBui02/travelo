import React from "react";
import img from "~/assets/img";
import PopularPlace from "~/components/Content/PopularPlaces/PopularPlace";
import DetailInfo from "~/components/Details_Info/DetailInfo";
import Newletter from "~/components/Newletter/Newletter";
import SlideOnly from "~/components/Slider/SlideOnly/SlideOnly";

const Details = () => {
  return (
    <>
      <SlideOnly image={img.details} title="Saintmartine Iceland" />
      <DetailInfo />
      <Newletter />
      <PopularPlace />
    </>
  );
};

export default Details;
