import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../../data.json";
import ErrorPage from '../components/ErrorPage';

const Product: React.FC = () => {
  const { categoryId, productId } = useParams();
  const category = data.categories.find(cat => cat.id === parseInt(categoryId!, 10));

  if (!category) {
    return <ErrorPage message='There is no category with that id?!' status={404} />;
  }

  const product = category.products.find(prod => prod.id === parseInt(productId!, 10));

  if (!product) {
    return <ErrorPage message='There is no product with that id?!' status={404} />;
  }

  return (
    <div className="product-details container">
      <img src={product.imgSrc} alt={product.name} />
      <h1>{product.name}</h1>
    </div>
  );
}

export default Product;
