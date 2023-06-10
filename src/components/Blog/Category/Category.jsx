import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";
const Category = () => {
  return (
    <>
      <aside className="single_sidebar category_widget">
        <h3>Category</h3>
        <ul>
          <li>
            <Link to="/">Resaurant food (37)</Link>
          </li>
          <li>
            <Link to="/">Travel news (10)</Link>
          </li>
          <li>
            <Link to="/">Modern technology (03)</Link>
          </li>
          <li>
            <Link to="/">Product (11)</Link>
          </li>
          <li>
            <Link to="/">Inspiration 21</Link>
          </li>
          <li>
            <Link to="/">Health Care (21) 09</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Category;
