import React from "react";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import "./DefaultLayout.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
