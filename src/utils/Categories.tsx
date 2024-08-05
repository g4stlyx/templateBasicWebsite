import React from "react";
import "../styles/OurProducts.css";
import data from "../../data.json";
import { Category } from "../types";
import { Link } from "react-router-dom";

const categories = data.categories.slice(0, 12);

const Categories: React.FC = () => {
  return (
    <div className="products-grid container">
      {categories.map((category: Category) => (
        <div key={category.id} className="product-box">
          <Link to={`/categories/${category.id}`}>
            <img src={category.imgSrc} alt={category.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
