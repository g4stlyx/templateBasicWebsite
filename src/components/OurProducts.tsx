import React from "react";
import Categories from "../utils/Categories.tsx";

const OurProducts: React.FC = () => {
  return (
    <div>
      <div
        className="page-header page-image"
        style={{
          backgroundImage:
            "url(https://www.erdassedye.com/wp-content/webp-express/webp-images/uploads/2024/01/header-bg-top.jpg.webp)",
        }}
      >
        <div className="page-filter">
          <div className="container page-header-text">
            <h1>ÜRÜNLERİMİZ</h1>
          </div>
        </div>
      </div>
      <br />
      
      <Categories />

    </div>
  );
};

export default OurProducts;
