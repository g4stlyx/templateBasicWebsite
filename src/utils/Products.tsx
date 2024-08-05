import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../../data.json";
import ErrorPage from '../components/ErrorPage';

const Products: React.FC = () => {
  const { categoryId } = useParams();
  const category = data.categories.find(cat => cat.id === parseInt(categoryId!, 10));

  if (!category) {
    return <ErrorPage message='There is no category with that id?!' status={404} />;
  }

  return (
    <div className="products-grid container">
      {category.products.map((product) => (
        <div key={product.id} className="product-box">
          <Link to={`/categories/${category.id}/products/${product.id}`}>
            <img src={product.imgSrc} alt={product.name} />
            <p>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
