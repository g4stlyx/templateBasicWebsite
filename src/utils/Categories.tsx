import React from 'react'
import "../styles/OurProducts.css"

const products = [
    { id: 1, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product1' },
    { id: 2, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product2' },
    { id: 3, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product3' },
    { id: 4, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product4' },
    { id: 5, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product5' },
    { id: 6, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product6' },
    { id: 7, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product7' },
    { id: 8, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product8' },
    { id: 9, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product9' },
    { id: 10, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product10' },
    { id: 11, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product11' },
    { id: 12, imgSrc: 'https://www.erdassedye.com/wp-content/uploads/2024/01/fizik-tedavi-urunleri-540x540.jpg', link: '/product12' },
  ];

const Categories: React.FC = () => {
    return (
        <div className="products-grid container">
          {products.map((product) => (
            <div key={product.id} className="product-box">
              <a href={product.link}>
                <img src={product.imgSrc} alt={`Product ${product.id}`} />
              </a>
            </div>
          ))}
        </div>
      );
}

export default Categories