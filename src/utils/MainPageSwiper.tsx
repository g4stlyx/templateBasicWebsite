import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/MainPageSwiper.css";

const MainPageSwiper: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption className="custom-caption">
          <div className="text-container">
            <h1>Özel Tasarım Sedye İmalatı</h1>
            <p>
              Sağlık sektörüne özel, yüksek kaliteli ve güvenilir hasta
              yatakları, engelli araçları, ambulans ve sedye aksesuarları
              sunuyoruz. Sağlık ve erişim konusunda yenilikçi yaklaşımlarımızla
              hizmetinizdeyiz! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est id commodi molestias temporibus, assumenda
              natus illum dicta. Laudantium accusamus minima optio, similique
              voluptate distinctio tempore temporibus voluptatibus nobis
              pariatur qui!
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/triss.jpg"
              alt="Additional Image"
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption className="custom-caption">
          <div className="text-container">
            <h1>Özel Tasarım Sedye İmalatı</h1>
            <p>
              Sağlık sektörüne özel, yüksek kaliteli ve güvenilir hasta
              yatakları, engelli araçları, ambulans ve sedye aksesuarları
              sunuyoruz. Sağlık ve erişim konusunda yenilikçi yaklaşımlarımızla
              hizmetinizdeyiz! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est id commodi molestias temporibus, assumenda
              natus illum dicta.
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://www.famous-jackets.co.uk/wp-content/uploads/2015/05/Witcher-3-Wild-Hunt-Yennefer-Leather-Jacket.jpg"
              alt="Additional Image"
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption className="custom-caption">
          <div className="text-container">
            <h1>Özel Tasarım Sedye İmalatı</h1>
            <p>
              Sağlık sektörüne özel, yüksek kaliteli ve güvenilir hasta
              yatakları, engelli araçları, ambulans ve sedye aksesuarları
              sunuyoruz. Sağlık ve erişim konusunda yenilikçi yaklaşımlarımızla
              hizmetinizdeyiz! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est id commodi molestias temporibus, assumenda
              natus illum dicta. Laudantium accusamus minima optio, similique
              voluptate distinctio tempore temporibus voluptatibus nobis
              pariatur qui!
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGgS_-H9-mKS9sWRag-2ERbeUjT02591Awg&s"
              alt="Additional Image"
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainPageSwiper;
