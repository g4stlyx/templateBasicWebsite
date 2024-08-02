import React from "react";

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

      <pre>
      yeah i wont do this one. But it seems doable with a proper backend: <br />
        urunlerimiz would show a list of categories and when you click one, <br />
          it will show a list of products belong to that category.
      </pre>
    

    </div>
  );
};

export default OurProducts;
