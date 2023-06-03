import React from "react";
import SlideOnly from "~/components/Slider/SlideOnly/SlideOnly";
import img from "~/assets/img";
import ContentBlog from "~/components/Blog/ContentBlog";

const Blog = () => {
  return (
    <>
      <SlideOnly image={img.blog} title="Blog" />
      <ContentBlog />
    </>
  );
};

export default Blog;
